//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: STIIMD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

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

