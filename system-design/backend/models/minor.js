const mongoose=require('mongoose');
const schema=mongoose.Schema;
const minorSchema= new schema({
  name:{type:String,unique:true,required:true},
  classes:{type:[]}
});


module.exports= mongoose.model('minor', minorSchema);