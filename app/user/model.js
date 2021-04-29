const mongoose = require('mongoose');

const {model,Schema} = mongoose;

const userSchema = Schema({
    username:String,
    password:String,
},{timestamps:true})

module.exports = model('user',userSchema);