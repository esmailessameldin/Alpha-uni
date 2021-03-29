const router = require('express').Router();
let sections = require('../models/sections.js');
let audit =require('../models/Degrees.js')
let users =require('../models/user.js')
let faculty=require('../models/faculty.js')
const mongoose=require('mongoose')


router.route('/viewaudit/:major').get(async(req,res)=>{
    var x=req.params.major
    
    console.log(x)
       audit.findOne({major:x})
      .then(audit => res.json(audit.classes))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findbycrn/:id').post(async(req,res)=>{
  console.log("you are here")
    mongoose.set('useFindAndModify', false);
   var x= req.params.id
 const u= await sections.findOneAndUpdate({crn:req.body.crn},{$inc: {'students': 1,'capacity':-1}},{new:true})

const w =  await users.findOneAndUpdate({id:x}, {
    $push: { sections:u } 
}, {
    new: true
  });
  console.log(u.name)
  const n= await faculty.findOneAndUpdate({class:u.name},{$push: {enrolled:w.name+" "+u.time}},{new:true})
 console.log(u.name)
 console.log(w.name)
  res.send("section added")

})

router.route('/deletesection').post(async(req,res)=>{
  console.log("here")
  mongoose.set('useFindAndModify', false);
  const o= await sections.findOneAndUpdate({crn:req.body.crn},{$inc: {'students': -1,'capacity':1}},{new:true})
  console.log("done")
  let u =  await users.findOneAndUpdate({id:req.body.id}, {
      $pull: { sections:{name:o.name,time:o.time} }
  }, {
      new: true
    });
   console.log(u.name+" "+o.time)
     const n= await faculty.findOneAndUpdate({class:o.name},{$pull: {enrolled:u.name+" "+o.time}},{new:true})
     console.log(n)
    res.send("section removed")



})
router.route('/add').post((req, res) => { 

 

    const u = new sections({
        name:req.body.name,
        credit:req.body.credit,
        day:req.body.day,
        time:req.body.time,
        cap:req.body.cap,
        stud:req.body.stud,
        });


  u .save()
    .then(() => res.json(u.name +' Section added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/findbyclass/:name').get((req, res) =>  {
    var x=req.params.name
    
    console.log(x)
       sections.find({name:x})
      .then(sections => res.json(sections))
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;