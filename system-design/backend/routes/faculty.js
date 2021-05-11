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
 var k = req.params.id;
 var grade=req.body.grade
 var exists=false
console.log("here")

console.log(grade)
const u=await user.findOne({id:k})
for(var i=0;i<u.transcript.length;i++){
if(u.transcript[i].year=="Spring 2021"){
exists=true
}}
console.log(exists)
if(!exists){
const final={ year:"Spring 2021",
class_one:grade}
    const h=await user.findOneAndUpdate({id:k},{$push:{transcript:final}},{new:true})
}else{
if(!u.transcript[u.transcript.length-1].class_one ){
    const l=await user.findOneAndUpdate({id:k,"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_one":grade}},{new:true})
}else if(!u.transcript[u.transcript.length-1].class_two ){
    const l=await user.findOneAndUpdate({id:k,"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_two":grade}},{new:true})
}else if(!u.transcript[u.transcript.length-1].class_three ){
    const l=await user.findOneAndUpdate({id:k,"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_three":grade}},{new:true})
}else if(!u.transcript[u.transcript.length-1].class_four){
    const l=await user.findOneAndUpdate({id:k,"transcript.year":"Spring 2021"},{$set:{"transcript.$.class_four":grade}},{new:true})
}
}
res.send("Grade has been submitted")
})

module.exports = router;