const router = require('express').Router();
let user = require('../models/admin.js');
let sections=require('../models/sections')
let nextsections=require('../models/nextsections')
const { findOneAndDelete } = require('../models/user');
const mongoose = require('mongoose');
let faculty=require('../models/faculty')
let classes=require('../models/class')
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
router.route('/viewallnextcourses').get(async(req,res)=>{
    const u=await nextsections.find({})
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

    const l=await user.findOneAndUpdate({},{$pull:{grade_requests:grade}},{new:true})
    

var array = grade.split(",");
console.log(array)

x["year"]="Spring 2021"
const j= await students.findOne({name:array[2]})
console.log(array[2])
var boolenn=j.transcript[j.transcript.length-1].year==="Spring 2021"
console.log(x)
 if(boolenn===false){
    console.log("done")
 const h=await students.findOneAndUpdate({name:array[2]},{$push:{transcript:x}},{new:true})
}

console.log(j.transcript.length)
if(!j.transcript[j.transcript.length-1].class_one){
   const l=await students.findOneAndUpdate({name:array[2],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_one":array[0]}},{new:true})
 classnumber="first"
}else if(!j.transcript[j.transcript.length-1].class_two){
    const l=await students.findOneAndUpdate({name:array[2],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_two":array[0]}},{new:true})
   classnumber="second"
}else if(!j.transcript[j.transcript.length-1].class_three){
    const l=await students.findOneAndUpdate({name:array[2],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_three":array[0]}},{new:true})
   classnumber="third"
}else if(!j.transcript[j.transcript.length-1].class_four){
    const l=await students.findOneAndUpdate({name:array[2],"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_four":array[0]}},{new:true})
   classnumber="fourth"
}
res.send("Grade for "+classnumber+" added")



})
router.route('/').get(async(req,res)=>{
const u = await user.findOne() 

var x=[]
x=u.grade_requests
x.sort()
console.log(x)
res.send(x)

})
router.route('/addhold/:id').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false);
    
    
    
    
    var message=req.body.message
    if(!message){
        const u= await students.findOneAndUpdate({id:req.params.id},{
            hold:false,
            holdmessage:""
           
        },{new:true})
        res.send("Hold removed !")
return
    }
    console.log(message)
const u= await students.findOneAndUpdate({id:req.params.id},{
    hold:true,
    holdmessage:message
},{new:true})

res.send("Hold added !")



})
router.route('/addclass').post(async(req,res)=>{

    const u = new classes({
           name:req.body.name,
           teacher:req.body.teacher,
           id:req.body.id,
           major:req.body.major
        
});
 console.log(u)
 const o= await faculty.findOne({name:u.teacher}) 
 if(o.class){
res.send("Teacher is currently teaching classes. Please enter a teacher who has no classes. Class not added.")
return
 }
  u .save()
    .then(() => res.json('Class added ! Click here to add sections'))
    .catch(err => res.status(400).json('Error: ' + err));


})
router.route('/addsections').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false);
    const u = new nextsections({
        name:req.body.name,
        day:req.body.day,
        time:req.body.time,
        building:req.body.building,
        room:req.body.room,
        teacher:req.body.teacher,
        crn:req.body.crn
      
     });
    
const l=await nextsections.findOne({day:u.day,time:u.time,room:u.room,building:u.building})
if(l){
res.send("There is already a class during this time in this room. Section not created.")
return
}
const m=await  nextsections.findOne({crn:u.crn})
if(m){
    res.send("This CRN is already used. Please choose a different CRN.")
    return
}
const teach=await faculty.findOne({name:u.teacher})
if(!teach){
    console.log(u.teacher)
res.send("This teacher does not exist.")
return
}
const final=await faculty.findOneAndUpdate({name:u.teacher},{$set:{class:u.name}},{new:true})
console.log(u)
u .save()
 .then(() => res.json('Class added !'))
 .catch(err => res.status(400).json('Error: ' + err));



})
router.route('/addsecondsection').post(async(req,res)=>{

    await mongoose.set('useFindAndModify', false);
    const u = new sections({
        name:req.body.name,
        day:req.body.day,
        time:req.body.time,
        building:req.body.building,
        room:req.body.room,
        teacher:req.body.teacher,
        crn:req.body.crn
      
     });
    
const l=await sections.findOne({day:u.day,time:u.time,room:u.room,building:u.building})
if(l){
res.send("There is already a class during this time in this room. Section not created.")
return
}
const m=await  sections.findOne({crn:u.crn})
if(m){
    res.send("This CRN is already used. Please choose a different CRN.")
    return
}
const teach=await faculty.findOne({name:u.teacher})
if(!teach){
    console.log(u.teacher)
res.send("This teacher does not exist.")
return
}

console.log(u)
u .save()
 .then(() => res.json('Class added !'))
 .catch(err => res.status(400).json('Error: ' + err));

})
router.route('/getopen').post(async(req,res)=>{
const u=await user.findOne({id: 800000001})
console.log(u)
res.send(200, {"result": u.open})



})
router.route('/getopennext').post(async(req,res)=>{
    const u=await user.findOne({id: 800000001})
    res.send(200, {"result": u.opennext})
    
    
    
})
router.route('/close').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false); 
    const u=await user.findOne({id: 800000001})
    if(u.open){
        const o=await user.findOneAndUpdate({id:800000001},{open:false},{new:true})
        res.send("Students can no longer add classes for this semester. They can only withdraw.")
    }else{
        const o=await user.findOneAndUpdate({id:800000001},{open:true},{new:true})
        res.send("Students can now add or drop classes for this semester.")
    }
})
router.route('/closenext').post(async(req,res)=>{
        await mongoose.set('useFindAndModify', false); 
        const u=await user.findOne({id: 800000001})
        if(u.opennext){
            const o=await user.findOneAndUpdate({id:800000001},{opennext:false},{new:true})
            res.send("Students can no longer add or drop classes for next semester. ")
        }else{
            const o=await user.findOneAndUpdate({id:800000001},{opennext:true},{new:true})
            res.send("Students can add or drop classes for next semester.")
        }
})
router.route('/getadmin').post(async(req,res)=>{
    const u=await user.findOne({id: 800000001})
res.send(u)
})
module.exports = router;