const mongoose=require('mongoose');
const schema=mongoose.Schema;
const majorSchema= new schema({
  name:{type:String,unique:true,required:true},
  majors:{type:[]}
});


module.exports= mongoose.model('departments', majorSchema);