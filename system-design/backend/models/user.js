const mongoose=require('mongoose');
const schema=mongoose.Schema;
const studentSchema= new schema({
  name:{type:String,unique:true,required:true},
  id:{type:Number,unique:true},
  password:{type:String,required:true},
  email:{type:String,unique:true,required:true,default:""},
 major:{type:String,default:"Undecided"},
 sections:{type:[],default:[]},
 sections_next_semester:{type:[],default:[]},
 birthday:{type:String},
 address:{type:String},
 year:{type:String,default:"Freshman"},
 status:{type:String},
 transcript:{type:[]},
 minor:{type:String},
 hold:{type:Boolean,default:false},
 holdmessage:{type:String},
 attendance:{type:[]},
 absent_days:{type:Number}
});


module.exports= mongoose.model('user', studentSchema);