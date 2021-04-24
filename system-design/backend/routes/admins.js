const router = require('express').Router();
let user = require('../models/admin.js');
let sections=require('../models/sections')
const { findOneAndDelete } = require('../models/user');
const mongoose = require('mongoose');
let faculty=require('../models/faculty')
let students=require('../models/user')
var x = 800000001;
var y=700000001;

router.route('/viewallfaculty').get(async(req,res)=>{

    const u=await faculty.find({})
    res.send(u)
})
router.route('/loginAdmin').post(async(req,res)=>{

    let status=""

    user.findOne({email:req.body.email}).then(user=>{
        if(!user){
           status="user does not exist please try again"
           res.send(status)
        }else{
            const l= req.body.password;
            flag2 = l.localeCompare(user.password);
            if(flag2){
             status="wrong password"
             res.send(status)
            }else{
                console.log(user)
               return res.send(user.id+""+status)
            }
        }
    }).catch(err=>console.log(err));





})
router.route("/wipesection").delete(async(req,res)=>{
const u=await sections.findOneAndDelete({crn:req.body.crn})
res.send("section deleted")

})
router.route('/viewallcourses').get(async(req,res)=>{
const u=await sections.find({})


res.send(u)


})
router.route('/smitestudent').delete(async(req,res)=>{
const u=await students.findOneAndDelete({id:req.body.id})
console.log(u)

})
router.route('/smitefaculty').delete(async(req,res)=>{
    const u=await faculty.findOneAndDelete({id:req.body.id})
    console.log(u)
    res.send("he ded")
    })

router.route('/updatestudent/:id').post(async(req,res)=>{
   await mongoose.set('useFindAndModify', false);
const u=await students.findOneAndUpdate({id:req.params.id},{
    email: req.body.email,
    password: req.body.password,
    name:req.body.name,
    birthday:req.body.birthday,
    status:req.body.status,
    major:req.body.major,
    address:req.body.address,
    year:req.body.year
},{new:true})

console.log(u)

})
router.route('/updatefaculty/:id').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false);
 const u=await faculty.findOneAndUpdate({id:req.params.id},{
     email: req.body.email,
     password: req.body.password,
     name:req.body.name,
     birthday:req.body.birthday,
     office_room_number:req.body.number,
     office_buidling:req.body.office,
     address:req.body.address,
     class:req.body.class
 },{new:true})
 
 console.log(u)
 
 })
router.route('/add').post((req, res) => {
  
    const u = new students({

        email: req.body.email,
        id:y,
        password: req.body.password,
        name:req.body.name,
        birthday:req.body.birthday,
        status:req.body.status,
        major:req.body.major,
        address:req.body.address,
        year:req.body.year

        });
 y= y+1;
 console.log(u)

  u .save()
    .then(() => res.json('student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/viewallstudents').get(async(req,res)=>{
const u=await students.find({})
res.send(u)


})
router.route('/handlegrade/:grade').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false);
    const grade=req.params.grade
    var x={}
    var classnumber = "failed"
    x["year"]="Spring 2020"


var array = grade.split(",");


x["year"]="Spring 2021"
const j= await students.findOne({id:array[1]})
console.log(j.transcript.length)
console.log(!j.transcript[j.transcript.length-1].year==="Spring 2021")
var boolenn=j.transcript[j.transcript.length-1].year==="Spring 2021"
console.log(x)
 if(boolenn===false){
    console.log("done")
 const h=await students.findOneAndUpdate({id:array[1]},{$push:{transcript:x}},{new:true})
}

console.log(j.transcript.length)
if(!j.transcript[j.transcript.length-1].class_one){
   const l=await students.findOneAndUpdate({id:array[1],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_one":array[0]}},{new:true})
 classnumber="first"
}else if(!j.transcript[j.transcript.length-1].class_two){
    const l=await students.findOneAndUpdate({id:array[1],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_two":array[0]}},{new:true})
   classnumber="second"
}else if(!j.transcript[j.transcript.length-1].class_three){
    const l=await students.findOneAndUpdate({id:array[1],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_three":array[0]}},{new:true})
   classnumber="third"
}else if(!j.transcript[j.transcript.length-1].class_four){
    const l=await students.findOneAndUpdate({id:array[1],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_four":array[0]}},{new:true})
   classnumber="fourth"
}
res.send("Grade for "+classnumber+" added")



})

module.exports = router;