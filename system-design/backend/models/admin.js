const mongoose=require('mongoose');
const schema=mongoose.Schema;
const adminSchema= new schema({
  name:{type:String,unique:true,required:true},
  id:{type:String,unique:true},
  password:{type:String,required:true},
  email:{type:String,unique:true,required:true,default:""},
  grade_requests:{type:[]},
  open:{type:Boolean,default:true},
  opennext:{type:Boolean,default:true}
});

module.exports= mongoose.model('admin', adminSchema);