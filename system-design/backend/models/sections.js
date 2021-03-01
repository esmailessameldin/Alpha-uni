const mongoose=require('mongoose');
const schema=mongoose.Schema;
const sectionsSchema= new schema({
  name:{type:String,unique:true,required:true},
  credit:{type:Number,default:3},
  day:{type:String},
  time:{type:String},
  cap:{type:Number,default:20},
  stud:{type:Number,default:0},
 
});


module.exports= mongoose.model('sections', sectionsSchema);