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


module.exports = router;