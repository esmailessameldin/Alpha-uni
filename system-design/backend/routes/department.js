const router = require('express').Router();
const department = require('../models/department')
const major = require('../models/Degrees')

router.route('/add').post(async(req,res)=>{
    const u = new department({

        name: req.body.name
        });
u .save()
    .then(() => res.json('Department added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    console.log(u)



})
router.route('/addmajor').post(async(req,res)=>{
const y= await major.findOne({name:req.body.major})
const u =await department.findOneAndUpdate({name:req.body.department},{

$push:{majors:y.name}


},{new:true})


res.send("major added to department")
})

router.route('/findall').get(async(req,res)=>{
const u= await department.find({})

res.send(u)
 })

router.route('/findbyname').post(async(req,res)=>{
    var x =req.body.name
    console.log("this is "+x)
const u = await department.findOne({name:x})
res.send(u.majors)

})


module.exports = router;