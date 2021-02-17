const router = require('express').Router();
let user = require('../models/admin.js');
var x = 800000001;




router.route('/add').post((req, res) => {
  
    const u = new user({

        name: req.body.name,
        email:req.body.email,
        id:x,
        password:req.body.password,

        });
 x = x+1;

  u .save()
    .then(() => res.json('admin added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;