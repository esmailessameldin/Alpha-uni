const router = require('express').Router();
let sections = require('../models/sections.js');
let audit =require('../models/Degrees.js')


router.route('/viewaudit/:major').get(async(req,res)=>{
    var x=req.params.major
    
    console.log(x)
       audit.findOne({major:x})
      .then(audit => res.json(audit.classes))
      .catch(err => res.status(400).json('Error: ' + err));
});




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