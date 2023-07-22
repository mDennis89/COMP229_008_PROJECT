//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: STIIMD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

<<<<<<< HEAD
let mongoose = require('mongoose');

// create a model class
let User = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Password: Number,
    Email: String,
    Phonenumber : Number,
    Mailaddress: String,
    
},
{
  collection: "users"
});

module.exports = mongoose.model('User', User);
=======
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phonenumber: { type: String, required: true },
  email: { type: String, required: true },
  mailaddress: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
>>>>>>> 552e98c5c90d143b96b2c01e7c67ca1b3995a400
