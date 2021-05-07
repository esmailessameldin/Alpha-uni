const router = require('express').Router();
const { useReducer } = require('react');
let user = require('../models/user.js');
let sections=require('../models/sections.js')
let faculty=require('../models/faculty.js')
let admin=require('../models/admin.js')
const mongoose = require('mongoose');

var x = 700000001;
router.route('/add').post((req, res) => {
  
    const u = new user({

        name: req.body.name,
        address:req.body.address,
        email:req.body.email,
        birthday:req.body.birthday,
        id:x,
        status:req.body.status,
        password:req.body.password,

        });
 x = x+1;

  u .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    console.log(u)
});
router.route('/login').post(async(req,res)=>{
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
router.route('/:id').get((req, res) => {
    var x=req.params.id
    
    console.log(x)
       user.findOne({id:x})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/get/:name').get((req, res) => {
    var x=req.params.name
    
    console.log(x)
       user.findOne({name:x})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
});
 router.route('/transcript/:id').get(async(req,res)=>{
     const u= await user.findOne({id:req.params.id})
     console.log(u.transcript)
res.json(u.transcript)
})
router.route('/generatearray').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false);


for(var i=0;i<30;i++){
    const u= await user.updateMany({},{
$push:{attendance:true}

    },{new:true})
    
    
}
res.send("done !")
})
router.route('/updateattendance/:name').post(async(req,res)=>{
    await mongoose.set('useFindAndModify', false);
var k=req.body.array
var v=0
console.log(k)
for(var i=0;i<k.length;i++){
    if(!k[i]){
         v=v+1
    }
}
const u=await user.findOneAndUpdate({name:req.params.name},{$set:{attendance:k,absent_days:v}},{new:true})
res.send("done")
})


module.exports = router;