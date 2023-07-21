//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: STIIMD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

let express = require('express');
let router = express.Router();
// let User = require('../models/users');

console.log("userRoute1");
router.get('/', (req, res) => {
  // Your logic to check authentication status
  // let authenticated = req.session.authenticated || false;
  console.log("userRoute2");
  res.render('user/login', {      //login.ejs
    title: 'Sign In',
    error: req.query.error === '1',
    // authenticated: 'authenticated'
  });
});



module.exports = router;