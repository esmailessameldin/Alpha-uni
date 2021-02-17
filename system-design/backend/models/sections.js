const mongoose=require('mongoose');
const schema=mongoose.Schema;
const sectionsSchema= new schema({
  name:{type:String,unique:true,required:true},
  credit01:{type:Number,default:3},
  day01:{type:String},
  time01:{type:String},
  cap01:{type:Number,default:20},
  stud01:{type:Number,default:0},
  credit02:{type:Number,default:3},
  day02:{type:String},
  time02:{type:String},
  cap02:{type:Number,default:20},
  stud02:{type:Number,default:0},
});


module.exports= mongoose.model('sections', sectionsSchema);