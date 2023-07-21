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
let User = require('../models/users');

router.get('/', (req, res) => {
  res.render('user/register', {      //login.ejs
    title: 'User Registration',
  });
});

router.post('/register', (req, res) => {
  const { username, password, firstname, lastname, email, phonenumber, mailaddress } = req.body;

  // Create a new User object based on the User model
  const newUser = new User({
    username,
    password,
    firstname,
    lastname,
    email,
    phonenumber,
    mailaddress,
  });

  // Save the new user to the database
  newUser.save()
    .then(() => {
      res.redirect('/registered'); // Redirect to the "registered" page after successful registration
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/');
    });
});


module.exports = router;