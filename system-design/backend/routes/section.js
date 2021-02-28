const router = require('express').Router();
let sections = require('../models/sections.js');





router.route('/add').post((req, res) => { 

 

    const u = new sections({
        name:req.body.name,
        credit01:req.body.credit1,
        day01:req.body.day1,
        time01:req.body.time1,
        cap01:req.body.cap1,
        stud01:req.body.stud1,
        credit02:req.body.credit2,
        day02:req.body.day2,
        time02:req.body.time2,
        cap02:req.body.cap2,
        stud02:req.body.stud2,

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