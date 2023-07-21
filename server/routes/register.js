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

router.get('/', (req, res, next) => {
  res.render('user/register', {
    title: 'User Registration',
  });
});

router.post('/add', (req, res, next) => {
  console.log('Received form data:', req.body);
  let { userid, password, firstname, lastname, email, phonenumber, mailaddress } = req.body;

  // Create a new User object based on the User model
  let newUser = new User({
    Userid: userid,
    Password: password,
    Firstname: firstname,
    Lastname: lastname,
    Email: email,
    Phonenumber: phonenumber,
    Mailaddress: mailaddress,
  });

  // Save the new user to the database
  newUser.save()
    .then(() => {
      console.log('User registered successfully!');
      res.redirect('/registered');
    })
    .catch((err) => {
      console.error('Error while saving user:', err);
      res.redirect('/');
    });
});

module.exports = router;

