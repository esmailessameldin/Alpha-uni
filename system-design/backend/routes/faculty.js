const router = require('express').Router();
let faculty = require('../models/faculty.js');
var x = 900000001;




router.route('/add').post((req, res) => { 

 

    const u = new faculty({

        name: req.body.name,
        email:req.body.email,
        id:x,
        password:req.body.password,
        course:req.body.course

        });
 x = x+1;

  u .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;