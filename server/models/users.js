//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: STIIMD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

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