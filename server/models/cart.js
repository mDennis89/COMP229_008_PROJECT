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
let Cart = mongoose.Schema({
    Brand: String,
    Model: String,
    Specifications: String,
    Price: Number,
    Quantity: Number
},
{
  collection: "cart"
});

module.exports = mongoose.model('Cart', Cart);
