const router = require('express').Router();
const { useReducer } = require('react');
let user = require('../models/user.js');
let section=require('../models/sections.js')
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

router.route('/login').post((req,res)=>{

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

router.route('/:id').get((req, res) => {
    var x=req.params.id
    
    console.log(x)
       user.findOne({id:x})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/addsection').post(async(req,res)=>{
    mongoose.set('useFindAndModify', false);
    const o= await section.findOneAndUpdate({name:req.body.name,time:req.body.time}, {$inc: {'stud': 1}},{new:true})
    console.log(o)
    let u =  await user.findOneAndUpdate({id:req.body.id}, {
        $push: { sections:o } 
    }, {
        new: true
      });
     
      res.send("section added")

})

router.route('/deletesection').post(async(req,res)=>{
    mongoose.set('useFindAndModify', false);
    const o= await section.findOneAndUpdate({name:req.body.name,time:req.body.time}, {$inc: {'stud': -1}},{new:true})
    console.log(o)
    let u =  await user.findOneAndUpdate({id:req.body.id}, {
        $pull: { sections:{name:o.name,time:o.time} }
    }, {
        new: true
      });
     
      res.send("section removed")



})


module.exports = router;