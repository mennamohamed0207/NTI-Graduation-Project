const mongoose=require('mongoose');
const skill=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        required:true,
        type:String
    },
    link:{
        type:String
    },
    languages:{
        type:Array,
        required:true
    },
    
})
const skillModel= mongoose.model("skills",skill);

module.exports=skillModel;