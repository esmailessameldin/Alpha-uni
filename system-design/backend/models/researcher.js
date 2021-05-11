const mongoose=require('mongoose');
const schema=mongoose.Schema;
const researcherSchema= new schema({
  name:{type:String,unique:true,required:true},
  id:{type:String,unique:true},
  password:{type:String,required:true},
  email:{type:String,unique:true,required:true,default:""},
 
});


module.exports= mongoose.model('researcher', researcherSchema);