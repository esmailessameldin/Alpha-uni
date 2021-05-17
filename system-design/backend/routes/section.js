const router = require('express').Router();
let sections = require('../models/sections.js');
let audit =require('../models/Degrees.js')
let users =require('../models/user.js')
let faculty=require('../models/faculty.js')
let minor=require('../models/minor.js')
let degrees=require('../models/Degrees')
let nextsections=require('../models/nextsections')
let departments=require('../models/department')
let pre =require('../models/pre')
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
   var sent =false
 console.log(x)
 console.log(m)
 const student=await users.findOne({id:x})

const prereq= await pre.find({})
const sect=await sections.findOne({crn:m})


 setTimeout(function() {
   if(!sent)
  res.send("Error: You have either already taken this class, or you have not finished the prerequisite(s) for this class. Class not added.")
  return res.end()
  
}, 2800);
  const w =  await users.findOne({id:x})
console.log("line 37")
if(w.status==="Part Time" && w.sections_next_semester.length===2){
  if(!sent)
res.send("You have reached the maximum amount of classes that you are allowed to take based on your Status. No class has been added.")
send=true
return
}
if(w.status==="Full Time" && w.sections_next_semester.length===4){
  if(!sent)
  res.send("You have reached the maximum amount of classes that you are allowed to take based on your Status. No class has been added.")
  send=true
  return
  }
  const j=await nextsections.findOne({crn:m})
  var sectiontimeanddate=j.day+j.time
  for(var i=0;i<w.transcript.length;i++){
    if(w.transcript[i].class_one){
       array = w.transcript[i].class_one.split(": Midterm");
      if(j.name===array[0]){
        if(!sent)
        res.send("You have already taken this course. You have not been enrolled.")
        sent=true
      }
    }
    if(w.transcript[i].class_two){
      array = w.transcript[i].class_two.split(": Midterm");
     if(j.name===array[0]){
      if(!sent)
       res.send("You have already taken this course. You have not been enrolled.")
       sent=true
     }
   }
   if(w.transcript[i].class_three){
    array = w.transcript[i].class_three.split(": Midterm");
   if(j.name===array[0]){
    if(!sent)
     res.send("You have already taken this course. You have not been enrolled.")
     sent=true
   }
 }
 if(w.transcript[i].class_four){
  array = w.transcript[i].class_four.split(": Midterm");
 if(j.name===array[0]){
  if(!sent)
   res.send("You have already taken this course. You have not been enrolled.")
   sent=true
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
  if(!sent)
  res.send("Maximum Capacity reached. No more students can enroll in this section. Section not added.")
  sent=true
  return
}
console.log("line85")
for(var i=0;i<y.enrolled.length;i++){
  if(y.enrolled[i]===w.name+" "+j.time){
    if(!sent)
  res.send("You are already enrolled in this section. Section not added.")
  sent=true
  return
}


}
for(var i=0;i<w.sections.length;i++){
  if(w.sections[i].day+w.sections[i].time===sectiontimeanddate){
    if(!sent)
    res.send("Error: Time Conflict. You have a class during this time and days. Class not added.")
    sent=true
    return
  }
  
    }
    for(var i=0;i<prereq.length;i++){
      if(prereq[i].name==sect.name){
           for(var l=0;l<student.transcript.length;l++){
             if(student.transcript[l].class_one){
               var a=student.transcript[l].class_one
               var array=a.split(" : Midterm")
               array[0] = array[0].slice(0, -1);
               console.log(array)
              
               for(var t=0;t<prereq[i].dependencies.length;t++){
                console.log(prereq[i].dependencies[t]+" the prereq") 
                 if(prereq[i].dependencies[t]===array[0]){
                   
                    var result=true
                 }
                 
                 else{
                  if(!sent)
                   res.send("You have not taken one or more prerequisites for this class. Class not added.")
                   sent=true
                   return
                 }
               }
             }
             if(student.transcript[l].class_two){
              var a=student.transcript[l].class_two
              var array=a.split(" : Midterm")
              array[0] = array[0].slice(0, -1);
              console.log(array)
             
              for(var t=0;t<prereq[i].dependencies.length;t++){
               console.log(prereq[i].dependencies[t]+" the prereq") 
                if(prereq[i].dependencies[t]===array[0]){
                  
                   var result=true
                }
                
                else{
                  if(!sent)
                  res.send("You have not taken one or more prerequisites for this class. Class not added.")
                  sent=true
                  return
                }
              }
            }
            if(student.transcript[l].class_three){
              var a=student.transcript[l].class_three
              var array=a.split(" : Midterm")
              array[0] = array[0].slice(0, -1);
              console.log(array)
             
              for(var t=0;t<prereq[i].dependencies.length;t++){
               console.log(prereq[i].dependencies[t]+" the prereq") 
                if(prereq[i].dependencies[t]===array[0]){
                  
                   var result=true
                }
                
                else{
                  if(!sent)
                  res.send("You have not taken one or more prerequisites for this class. Class not added.")
                  sent=true
                  return
                }
              }
            }
            if(student.transcript[l].class_four){
              var a=student.transcript[l].class_four
              var array=a.split(" : Midterm")
              array[0] = array[0].slice(0, -1);
              console.log(array)
             
              for(var t=0;t<prereq[i].dependencies.length;t++){
               console.log(prereq[i].dependencies[t]+" the prereq") 
                if(prereq[i].dependencies[t]===array[0]){
                  
                   var result=true
                }
                
                else{
                  if(!sent)
                  res.send("You have not taken one or more prerequisites for this class. Class not added.")
                  sent=true
                  return
                }
              }
            }
           }
    
    
    
    
      }
    }
  const u= await nextsections.findOneAndUpdate({crn:m},{
   
    $inc: {'students': 1,'capacity':-1} 
  

  },{new:true})
  console.log(j+" the class")
  console.log(w.name+" the name of student")
const k= await users.findOneAndUpdate({name:w.name},{
  $push:{sections_next_semester:j}
},{new:true})
  console.log(u.name)
  const n= await faculty.findOneAndUpdate({class:u.name},{$push: {enrolled:w.name+" "+u.time}},{new:true})
 console.log(u.name)
 console.log(w.name)
 console.log(n)
 if(!sent)
  res.send("section added")
  sent=true
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
const student=await users.findOne({id:x})
console.log(w.transcript)
const prereq= await pre.find({})
const sect=await sections.findOne({crn:m})




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



    for(var i=0;i<prereq.length;i++){
      if(prereq[i].name==sect.name){
           for(var l=0;l<student.transcript.length;l++){
             if(student.transcript[l].class_one){
               var a=student.transcript[l].class_one
               var array=a.split(" : Midterm")
               array[0] = array[0].slice(0, -1);
               console.log(array)
              
               for(var t=0;t<prereq[i].dependencies.length;t++){
                console.log(prereq[i].dependencies[t]+" the prereq") 
                 if(prereq[i].dependencies[t]===array[0]){
                   
                    var result=true
                 }
                 
                 else{
                   res.send("You have not taken one or more prerequisites for this class. Class not added.")
                   return
                 }
               }
             }
             if(student.transcript[l].class_two){
              var a=student.transcript[l].class_two
              var array=a.split(" : Midterm")
              array[0] = array[0].slice(0, -1);
              console.log(array)
             
              for(var t=0;t<prereq[i].dependencies.length;t++){
               console.log(prereq[i].dependencies[t]+" the prereq") 
                if(prereq[i].dependencies[t]===array[0]){
                  
                   var result=true
                }
                
                else{
                  res.send("You have not taken one or more prerequisites for this class. Class not added.")
                  return
                }
              }
            }
            if(student.transcript[l].class_three){
              var a=student.transcript[l].class_three
              var array=a.split(" : Midterm")
              array[0] = array[0].slice(0, -1);
              console.log(array)
             
              for(var t=0;t<prereq[i].dependencies.length;t++){
               console.log(prereq[i].dependencies[t]+" the prereq") 
                if(prereq[i].dependencies[t]===array[0]){
                  
                   var result=true
                }
                
                else{
                  res.send("You have not taken one or more prerequisites for this class. Class not added.")
                  return
                }
              }
            }
            if(student.transcript[l].class_four){
              var a=student.transcript[l].class_four
              var array=a.split(" : Midterm")
              array[0] = array[0].slice(0, -1);
              console.log(array)
             
              for(var t=0;t<prereq[i].dependencies.length;t++){
               console.log(prereq[i].dependencies[t]+" the prereq") 
                if(prereq[i].dependencies[t]===array[0]){
                  
                   var result=true
                }
                
                else{
                  res.send("You have not taken one or more prerequisites for this class. Class not added.")
                  return
                }
              }
            }
           }
    
    
    
    
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
router.route('/getnumber').post(async(req,res)=>{
  console.log("here")
  var list1=[]
  var list2=[]
  var list3=[]
  var studentssection=0
  var studentsmajors=0
  var studentsdepartments=0
  
const h=await departments.findOne({name:req.body.name})
for(var i=0;i<h.majors.length;i++){
const u=await degrees.findOne({major:h.majors[i]})
studentsmajors=studentsmajors+studentssection
var departmentsy={
  "name":u.major,
  "students":studentssection
}
console.log(departmentsy)
list1.push(departmentsy)
studentsdepartments=studentsdepartments+studentssection
studentssection=0
studentsmajors=0
for(var j=0;j<u.classes.length;j++){
  const z=await sections.find({name:u.classes[j]})
  console.log(z)
 if(!z[0]){
  console.log("failed")
 
  break
 }else if(!z[1]){
 console.log("failed 2")

  break
 }
 studentssection=studentssection+z[0].students+z[1].students
 console.log(studentssection)
 

}
}



const u=await degrees.findOne({major:h.majors[0]})
for(var j=0;j<u.classes.length;j++){
  const z=await sections.find({name:u.classes[j]})
 
 if(!z[0]){
  console.log("failed")
 
  break
 }else if(!z[1]){
 console.log("failed 2")

  break
 }
 studentssection=0
 studentssection=studentssection+z[0].students+z[1].students
 console.log(studentssection)
 

}

list1[0].students=studentssection
studentsdepartments=studentsdepartments+studentssection
const final={
  "name":h.name,
  "students":studentsdepartments
}
list3.push(final)
list3.push(list1)

res.send(list3)
})
router.route('/pre').post(async(req,res)=>{
  var result=null
const student=await users.findOne({name:"test"})
const prereq=await pre.find({})
const sect=await sections.findOne({name:"BU 4510   Intermediate Accounting II"})
for(var i=0;i<prereq.length;i++){
  if(prereq[i].name==sect.name){
       for(var j=0;j<student.transcript.length;j++){
         if(student.transcript[j].class_one){
           var n=student.transcript[j].class_one
           var array=n.split(" : Midterm")
           array[0] = array[0].slice(0, -1);
           console.log(array)
          
           for(var k=0;k<prereq[i].dependencies.length;k++){
            console.log(prereq[i].dependencies[k]+" the prereq") 
             if(prereq[i].dependencies[k]===array[0]){
               
               result=true
             }else{
               res.send("You have not taken one or more prerequisites for this class. Class not added.")
               return
             }
           }
         }
       }




  }
}

res.send("add success")

})

module.exports = router;