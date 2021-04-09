const router = require('express').Router();
let user = require('../models/admin.js');
var x = 800000001;
router.route('loginAdmin').post(async(req,res)=>{

    
    user.findOne({email:req.body.email}).then(user=>{
        if(!user){
            res.status(404).send("user does not exist please try again")
        }else{
            const l= req.body.password;
            flag2 = l.localeCompare(user.password);
            if(flag2){
                return res.send("100")
            }else{
                console.log(user)
               return res.status(200).send(user.id+"")
            }
        }
    }).catch(err=>console.log(err));





})



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