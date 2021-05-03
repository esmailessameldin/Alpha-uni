const router = require('express').Router();
let faculty = require('../models/faculty.js');
let user =require("../models/user")
let admins =require("../models/admin")
const mongoose = require('mongoose');
var x = 900000001;

router.route('/login').post(async(req,res)=>{    
    console.log(faculty)
        await faculty.findOne({email:req.body.email}).then(faculty=>{
            console.log(faculty)
            if(!faculty){
                res.status(404).send("teacher does not exist please try again")
            }else{
                const l= req.body.password;
                flag2 = l.localeCompare(faculty.password);
                if(flag2){
                    return res.send("100")
                }else{
                    console.log(faculty)
                   return res.status(200).send(faculty.id+"")
                }
            }
        }).catch(err=>console.log(err));
    })
    router.route('/getenrolled/:name').get(async(req,res)=>{
const u=await faculty.findOne({name:req.params.name})
console.log(u)
res.send(u.enrolled)



    })
 router.route('/:id').get((req, res) => {
        var x=req.params.id
        
        console.log(x)
           faculty.findOne({id:x})
          .then(faculty => res.json(faculty))
          .catch(err => res.status(400).json('Error: ' + err));
      });   
router.route('/add').post((req, res) => { 

 

    const u = new faculty({

        name: req.body.name,
        email:req.body.email,
        id:x,
        password:req.body.password,
        class:req.body.class,
        birthday:req.body.birthday,
        address:req.body.address,
        office_building:req.body.office,
        office_room_number:req.body.number,


        });
 x = x+1;
console.log(u)
  u .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/grade/:id').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false);
    var myString = req.params.id;
    var array = myString.split(",");
    console.log("here")
var userid=array[1]

var facultyid=array[0]


console.log(userid+" "+facultyid)
const u= await user.findOne({id:userid})
if(!u){
    res.send("Student does not exist")
    
}
const j=await faculty.findOne({id:facultyid})
if(!j){
    res.send("Teacher does not exist")
}
var grade=req.body.grade+","+j.name+","+u.name
console.log(grade)
const n= await admins.findOneAndUpdate({id:800000001},{$push: {grade_requests:grade}},{new:true})
res.send("Grade has been submitted to admin for approval")

})

module.exports = router;