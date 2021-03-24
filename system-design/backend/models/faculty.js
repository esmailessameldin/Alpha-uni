const mongoose=require('mongoose');
const schema=mongoose.Schema;
const facultySchema= new schema({
  name:{type:String,unique:true,required:true},
  birthday:{type:String},
  address:{type:String},
  office_building:{type:String},
  office_room_number:{type:Number},
  id:{type:Number,unique:true,required:true},
  password:{type:String,unique:true,required:true},
  email:{type:String,unique:true,required:true,default:""},
  class:{type:String},
  enrolled:{type:[]}
});


module.exports= mongoose.model('faculty', facultySchema);