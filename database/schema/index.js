const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstname:{
        type:String,
        maxlength:100,
        minlength:4
    },
    lastname:{
        type:String,
        maxlength:100,
        minlength:4
    },
    dob:{
        type:Date
    },
    address:{
        type:String,
        maxlength:100,
    },
    
    mobile:{
        type:String,
        minlength:10
    }

});


                       
module.exports.userSchema = userSchema;              
require("../methods/index");                        
const User = mongoose.model("User", userSchema);    
module.exports.User = User;    