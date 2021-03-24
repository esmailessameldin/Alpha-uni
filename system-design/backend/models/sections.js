const mongoose=require('mongoose');
const schema=mongoose.Schema;
const sectionsSchema= new schema({
  name:{type:String,unique:true,required:true},
  day:{type:String},
  time:{type:String},
  students:{type:Number,default:0},
  capacity:{type:Number,default:20},
  credits:{type:Number,default:4},
  building:{type:String},
  room:{type:Number},
  teacher:{type:String},
  crn:{type:String},
  enrolled:{type:[],default:[]}

 
});


module.exports= mongoose.model('sections', sectionsSchema);