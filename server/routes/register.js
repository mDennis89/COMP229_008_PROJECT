//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: ST || MD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

let express = require('express');
let router = express.Router();
let User = require('../models/users');

router.get('/', (req, res, next) => {
  res.render('user/register', {
    title: '',
    error: false,
  });
});

router.post('/add', async (req, res, next) => { // <-- Add 'async' here
  console.log('Received form data:', req.body);
  let { userid, password, firstname, lastname, email, phonenumber, mailaddress } = req.body;

try {
    // Check if the user already exists in the database
    let existingUser = await User.findOne({ userid });

    if (existingUser) {
      // If the user already exists, display a message and redirect to the registration page
      res.render('user/register', {
        title: '',
        error: true,

      });
      return;
    }
    
    // Create a new User object based on the User model
    let newUser = new User({
      userid: userid,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      mailaddress: mailaddress
    });

    // Save the new user to the database
    await newUser.save(); // <-- Add 'await' here
    console.log('User registered successfully!');
    res.redirect('/registered');
    
  } catch (err) {
    console.error('Error while saving user:', err);
    res.redirect('/');

  }
});

module.exports = router;


