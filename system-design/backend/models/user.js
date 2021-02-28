const mongoose=require('mongoose');
const schema=mongoose.Schema;
const studentSchema= new schema({
  name:{type:String,unique:true,required:true},
  id:{type:Number,unique:true},
  password:{type:String,required:true},
  email:{type:String,unique:true,required:true,default:""},
 major:{type:String,default:"Undecided"},
   courses:{type:[],default:null}
});


module.exports= mongoose.model('user', studentSchema);