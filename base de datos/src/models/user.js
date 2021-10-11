const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    lastname: String,
    email: {type:String, unique: true},
    phone: Number,
    password: String
//    image: String
    
});

module.exports = mongoose.model('users', User);