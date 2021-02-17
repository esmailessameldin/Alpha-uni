const mongoose=require('mongoose');
const schema=mongoose.Schema;
const facultySchema= new schema({
  name:{type:String,unique:true,required:true},
  id:{type:String,unique:true,required:true},
  password:{type:String,unique:true,required:true},
  email:{type:String,unique:true,required:true,default:""},
  course:{type:String}
});


module.exports= mongoose.model('faculty', facultySchema);