const mongoose=require('mongoose');
const schema=mongoose.Schema;
const advisorsSchema= new schema({
  name:{type:String,unique:true,required:true},
  major:{type:String,required:true}
});


module.exports= mongoose.model('advisors', advisorsSchema);