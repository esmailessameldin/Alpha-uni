const router = require('express').Router();
let classu = require('../models/class.js');



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

router.route('/findbymajor').post((req, res) => {
  classu.find({major:req.body.major}).then(user=>{
    if(!user){
        res.status(404).send("user does not exist please try again")
    }else{
            console.log(user)
           return res.status(200).send(user)
        
    }
}).catch(err=>console.log(err));
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

module.exports = router;
