const router = require('express').Router();
let classu = require('../models/class.js');
let sections=require('../models/sections.js')
router.route('/add').post((req, res) => {
    const u = new classu({

        name: req.body.name,
        id:req.body.id,
        description:req.body.description,
        teacher:req.body.teacher,
        time:req.body.time,
        major:req.body.major

        });

  u.save()
  .then(() => res.json('Class added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/findbymajor/:name').get((req, res) =>  {
  var x=req.params.name
  
  console.log(x)
     classu.find({major:x})
    .then(classu => res.json(classu))
    .catch(err => res.status(400).json('Error: ' + err));
}); 
router.route('/:id').delete((req, res) => {
  classu.findByIdAndDelete(req.params.id)
    .then(() => res.json('Class deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  classu.findById(req.params.id)
    .then(classu => {
      classu.username = req.body.username;
      classu.description = req.body.description;
      classu.duration = Number(req.body.duration);
      classu.date = Date.parse(req.body.date);

      classu.save()
        .then(() => res.json('Class updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/findbyname').post(async(req,res)=>{
  var t=req.body.name
  console.log(t)
const u =await classu.findOne({name:t})
console.log(u)
if(!u){
  res.send("Class does not exist.Please try again.")
  return
}
res.send(u)


})
router.route('/delete').post(async(req,res)=>{
var h=req.body.name
console.log(h)
const u=await classu.findOneAndDelete({name:h})
const j=await sections.findOneAndDelete({name:h})
})
router.route('/addsection').post(async(req,res)=>{
var x=req.body.name

})
module.exports = router;
