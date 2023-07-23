//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: ST || MD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose')

// create a model class
let User = mongoose.Schema
(
    {
        userid: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'userid is required'
        },

        firstname: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'firstname is required'
        },

        lastname: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'lastname is required'
        },
        /*
        password: 
        {
            type: String,
            default: '';
            trim: true,
            required: 'password is required'
        }
        */

       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
       },

       phonenumber: 
       {
            type: Number,
            default: '',
            trim: true,
            required: 'Phone number is required'
       },

       mailaddress: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Mail address is required'
       },

       created: 
       {
            type: Date,
            default: Date.now
       },
       
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
