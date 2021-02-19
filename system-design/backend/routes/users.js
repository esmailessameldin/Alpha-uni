const router = require('express').Router();
let user = require('../models/user.js');
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

router.route('/login').post(async(req,res)=>{

    const u = await user.findOne({email:req.body.email});
    if(!u)
    return res.status(404).send("user does not exist please try again");
    const l=await req.body.password
    
     flag2 = l.localeCompare(u.password);
        
    if(flag2)
    return res.send("passs ghlt")
  
    
    res.sendStatus(200)


})

module.exports = router;