const router = require('express').Router();
let sections = require('../models/sections.js');
let audit =require('../models/Degrees.js')
let users =require('../models/user.js')
let faculty=require('../models/faculty.js')
let minor=require('../models/minor.js')
let degrees=require('../models/Degrees')
let nextsections=require('../models/nextsections')
const mongoose=require('mongoose')
router.route('/adds').post((req, res) => { 

 

  const u = new nextsections({
      name:req.body.name,
     
      });


u .save()
  .then(() => res.json(u.name +' Section added!'))
  .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/findbycrnnext/:id').post(async(req,res)=>{
  console.log("you are here")
    mongoose.set('useFindAndModify', false);
   var x= req.params.id
   var m=req.body.crn
 console.log(x)
 console.log(m)

const w =  await users.findOne({id:x})

if(w.status==="Part Time" && w.sections_next_semester.length===2){
res.send("You have reached the maximum amount of classes that you are allowed to take based on your Status. No class has been added.")
return
}
if(w.status==="Full Time" && w.sections_next_semester.length===4){
  res.send("You have reached the maximum amount of classes that you are allowed to take based on your Status. No class has been added.")
  return
  }
  const j=await nextsections.findOne({crn:m})
  var sectiontimeanddate=j.day+j.time
  for(var i=0;i<w.transcript.length;i++){
    if(w.transcript[i].class_one){
       array = w.transcript[i].class_one.split(": Midterm");
      if(j.name===array[0]){
        res.send("You have already taken this course. You have not been enrolled.")
      }
    }
    if(w.transcript[i].class_two){
      array = w.transcript[i].class_two.split(": Midterm");
     if(j.name===array[0]){
       res.send("You have already taken this course. You have not been enrolled.")
     }
   }
   if(w.transcript[i].class_three){
    array = w.transcript[i].class_three.split(": Midterm");
   if(j.name===array[0]){
     res.send("You have already taken this course. You have not been enrolled.")
   }
 }
 if(w.transcript[i].class_four){
  array = w.transcript[i].class_four.split(": Midterm");
 if(j.name===array[0]){
   res.send("You have already taken this course. You have not been enrolled.")
 }
}
    
    }
  const y= await faculty.findOne({class:j.name})
  console.log(y)
  if(!j){
    console.log("not found")
    return
  }
if(j.capacity==0){
  res.send("Maximum Capacity reached. No more students can enroll in this section. Section not added.")
  return
}
for(let i=0;i<y.enrolled.length;i++){
if(y.enrolled[i]===w.name+" "+j.time){
  res.send("You are already enrolled in this section. Section not added.")
  return

}
for(var i=0;i<w.sections.length;i++){
  if(w.sections[i].day+w.sections[i].time===sectiontimeanddate){
    res.send("Error: Time Conflict. You have a class during this time and days. Class not added.")
    return
  }
  
    }

}
  const u= await nextsections.findOneAndUpdate({crn:m},{
   
    $inc: {'students': 1,'capacity':-1} 
  
  
  },{new:true})
const k= await users.findOneAndUpdate({id:x},{
  $push :{sections_next_semester:u}
},{new:true})
  console.log(u.name)
  const n= await faculty.findOneAndUpdate({class:u.name},{$push: {enrolled:w.name+" "+u.time}},{new:true})
 console.log(u.name)
 console.log(w.name)
 console.log(n)
  res.send("section added")

})
router.route('/addminor').post((req, res) => { 

 

  const u = new minor({
      name:req.body.name,
      
      });


u .save()
  .then(() => res.json(u.name +' Section added!'))
  .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/viewaudit/:major').get(async(req,res)=>{
    var x=req.params.major
    
    console.log(x)
       audit.findOne({major:x})
      .then(audit => res.json(audit.classes))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/viewminor/:minor').get(async(req,res)=>{
  var x=req.params.minor
  
  console.log(x)
     minor.findOne({name:x})
    .then(minor => res.json(minor.classes))
    .catch(err => res.send([]));
});
router.route('/findbycrn/:id').post(async(req,res)=>{
  console.log("you are here")
    mongoose.set('useFindAndModify', false);
   var x= req.params.id
   var m=req.body.crn
   var array= []
 

const w =  await users.findOne({id:x})
console.log(w.transcript)



if(w.status==="Part Time" && w.sections.length===2){
res.send("You have reached the maximum amount of classes that you are allowed to take based on your Status. No class has been added.")
return
}
if(w.status==="Full Time" && w.sections.length===4){
  res.send("You have reached the maximum amount of classes that you are allowed to take based on your Status. No class has been added.")
  return
  }
  const j=await sections.findOne({crn:m})
  var sectiontimeanddate=j.day+j.time
  
  console.log(j.name)
   for(var i=0;i<w.transcript.length;i++){
    if(w.transcript[i].class_one){
       array = w.transcript[i].class_one.split(": Midterm");
      if(j.name===array[0]){
        res.send("You have already taken this course. You have not been enrolled.")
      }
    }
    if(w.transcript[i].class_two){
      array = w.transcript[i].class_two.split(": Midterm");
     if(j.name===array[0]){
       res.send("You have already taken this course. You have not been enrolled.")
     }
   }
   if(w.transcript[i].class_three){
    array = w.transcript[i].class_three.split(": Midterm");
   if(j.name===array[0]){
     res.send("You have already taken this course. You have not been enrolled.")
   }
 }
 if(w.transcript[i].class_four){
  array = w.transcript[i].class_four.split(": Midterm");
 if(j.name===array[0]){
   res.send("You have already taken this course. You have not been enrolled.")
 }
}
    
    }
  const y= await faculty.findOne({class:j.name})
  console.log(j)
  if(!j){
    console.log("not found")
    return
  }
if(j.capacity==0){
  res.send("Maximum Capacity reached. No more students can enroll in this section. Section not added.")
  return
}
for(let i=0;i<y.enrolled.length;i++){
if(y.enrolled[i]===w.name+" "+j.time){
  res.send("You are already enrolled in this section. Section not added.")
  return

}

}
for(var i=0;i<w.sections.length;i++){
  if(w.sections[i].day+w.sections[i].time===sectiontimeanddate){
    res.send("Error: Time Conflict. You have a class during this time and days. Class not added.")
    return
  }
  
    }
  const u= await sections.findOneAndUpdate({crn:m},{
   
    $inc: {'students': 1,'capacity':-1} 
  
  
  },{new:true})
const k= await users.findOneAndUpdate({id:x},{
  $push :{sections:u}
},{new:true})
  console.log(u.name)
  const n= await faculty.findOneAndUpdate({class:u.name},{$push: {enrolled:w.name+" "+u.time}},{new:true})
 console.log(u.name)
 console.log(w.name)
 console.log(n)
  res.send("section added")

})
router.route('/deletenextsection').post(async(req,res)=>{
  console.log("here")
  mongoose.set('useFindAndModify', false);
  const o= await nextsections.findOneAndUpdate({crn:req.body.crn},{$inc: {'students': -1,'capacity':1}},{new:true})
  console.log(o)
  let u =  await users.findOneAndUpdate({id:req.body.id}, {
      $pull: { sections_next_semester:{name:o.name,time:o.time} }
  }, {  
      new: true
    });
   console.log(u.name+" "+o.time)
     const n= await faculty.findOneAndUpdate({class:o.name},{$pull: {enrolled:u.name+" "+o.time}},{new:true})
     console.log(n)
    res.send("section removed")



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
router.route('/add/:major').post(async(req, res) => { 
  mongoose.set('useFindAndModify', false);
 var i=req.body.params

    const u = new nextsections({
        name:req.body.name,
        credit:req.body.credit,
        day:req.body.day,
        time:req.body.time,
        cap:req.body.cap,
        students:req.body.stud,
        buidling:req.body.buidling,
        room:req.body.room,
        teacher:req.body.teacher,
        crn:req.body.crn
        });
const x=await degrees.findOneAndUpdate({major:req.params.major},{$push:{classes:u.name}},{new:true})

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
  router.route('/all').get(async(req,res)=>{
const u=await sections.find()
res.json(u)
})
router.route('/findone').get(async(req,res)=>{

const u =await nextsections.findOne({day:req.body.day,time:req.body.time,room:req.body.room})
if(!u){
res.send(true)

}else{
res.send(false)

}





})
  router.route('/findbynextclass/:name').get((req, res) =>  {
    var x=req.params.name
    
    console.log(x)
       nextsections.find({name:x})
      .then(nextsections => res.json(nextsections))
      .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/find/:crn').get(async(req,res)=>{
const u =await nextsections.findOne({crn:req.params.crn})
console.log(u)
res.send(u)

})
module.exports = router;