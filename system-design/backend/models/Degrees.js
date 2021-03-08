const mongoose=require('mongoose');
const schema=mongoose.Schema;
const degreeSchema= new schema({
  major:{type:String},
 classes:{type:[String]}
});


module.exports= mongoose.model('degrees', degreeSchema);