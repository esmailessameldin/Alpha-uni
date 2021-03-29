const mongoose=require('mongoose');
const schema=mongoose.Schema;
const transcriptSchema= new schema({
  year:{type:String},
  class_one:{type:String},
  class_two:{type:String},
  class_three:{type:String},
  class_four:{type:String},
});


module.exports= mongoose.model('transcript', transcriptSchema);