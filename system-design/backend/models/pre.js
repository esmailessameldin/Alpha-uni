const mongoose=require('mongoose');
const schema=mongoose.Schema;
const prerequisitesSchema= new schema({
  name:{type:String,unique:true},
  dependencies:{type:[]}
 
});


module.exports= mongoose.model('prerequisites', prerequisitesSchema);