const mongoose=require('mongoose');
const schema=mongoose.Schema;
const sectionsSchema= new schema({
  name:{type:String,unique:true,required:true},
  day:{type:String},
  time:{type:String},
  stud:{type:Number,default:0},
 
});


module.exports= mongoose.model('sections', sectionsSchema);