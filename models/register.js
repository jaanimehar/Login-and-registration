const mongoose = require('mongoose');
// schema
const userSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    mobileno:{type:Number, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true },
    confirmpassword:{type:String, required:true},

});
// model
const  Register_data= new mongoose.model('user_detail', userSchema);
module.exports=Register_data;
