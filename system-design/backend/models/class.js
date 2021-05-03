const mongoose=require('mongoose');
const schema=mongoose.Schema;
const classSchema= new schema({
  name:{type:String,unique:true,required:true},
  id:{type:String,unique:true,required:true},
  teacher:{type:String,required:true},
  major:{type:String,required:true}
});


module.exports= mongoose.model('class', classSchema);