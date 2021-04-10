const router = require('express').Router();
let user = require('../models/admin.js');
let sections=require('../models/sections')
const { findOneAndDelete } = require('../models/user');
let faculty=require('../models/faculty')
let students=require('../models/user')
var x = 800000001;

router.route('/viewallfaculty').get(async(req,res)=>{

    const u=await faculty.find({})
    res.send(u)
})
router.route('/loginAdmin').post(async(req,res)=>{

    
    user.findOne({email:req.body.email}).then(user=>{
        if(!user){
            res.status(404).send("user does not exist please try again")
        }else{
            const l= req.body.password;
            flag2 = l.localeCompare(user.password);
            if(flag2){
                return res.send("100")
            }else{
                console.log(user)
               return res.status(200).send(user.id+"")
            }
        }
    }).catch(err=>console.log(err));





})
router.route("/wipesection").delete(async(req,res)=>{
const u=await sections.findOneAndDelete({crn:req.body.crn})
res.send("section deleted")

})
router.route('/viewallcourses').get(async(req,res)=>{
const u=await students.find({},{"_id": 0,sections:1})
console.log(u)

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

router.route('/updatestudents/:id').post(async(req,res)=>{
const u=await students.findOneAndUpdate({id:req.params.id},{
name:req.body.name,
email:req.body.email,
major:req.body.major,
password:req.body.password,
address:req.body.adress,
},{new:true})



})
router.route('/add').post((req, res) => {
  
    const u = new user({

        name: req.body.name,
        email:req.body.email,
        id:x,
        password:req.body.password,

        });
 x = x+1;

  u .save()
    .then(() => res.json('admin added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/viewallstudents').get(async(req,res)=>{
const u=await students.find({})
res.send(u)


})


module.exports = router;