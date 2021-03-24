const router = require('express').Router();
let faculty = require('../models/faculty.js');
var x = 900000001;

router.route('/login').post(async(req,res)=>{    
    console.log(faculty)
        await faculty.findOne({email:req.body.email}).then(faculty=>{
            console.log(faculty)
            if(!faculty){
                res.status(404).send("teacher does not exist please try again")
            }else{
                const l= req.body.password;
                flag2 = l.localeCompare(faculty.password);
                if(flag2){
                    return res.send("100")
                }else{
                    console.log(faculty)
                   return res.status(200).send(faculty.id+"")
                }
            }
        }).catch(err=>console.log(err));
    })
    
 router.route('/:id').get((req, res) => {
        var x=req.params.id
        
        console.log(x)
           faculty.findOne({id:x})
          .then(faculty => res.json(faculty))
          .catch(err => res.status(400).json('Error: ' + err));
      });   
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