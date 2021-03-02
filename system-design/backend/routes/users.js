const router = require('express').Router();
const { useReducer } = require('react');
let user = require('../models/user.js');
let section=require('../models/sections.js')
const mongoose = require('mongoose');
const sections = require('../models/sections.js');
var x = 700000001;



router.route('/add').post((req, res) => {
  
    const u = new user({

        name: req.body.name,
        email:req.body.email,
        id:x,
        password:req.body.password,

        });
 x = x+1;

  u .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
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
    const o= await section.findOne({name:req.body.name})
    console.log(o)
    let u =  await user.findOneAndUpdate({id:req.body.id}, {
        $push: { sections: o } ,
        name:"nono",
    }, {
        new: true
      });
     
      res.send("section added")

})




module.exports = router;