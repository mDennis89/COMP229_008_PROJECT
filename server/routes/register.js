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
  const { userid, password, email, } = req.body;
  
  User.findOne({ userid, password, firstname, lastname, email, phonenumber, mailaddress })
    .then((user) => {          //new variable 'productList'
      if (user) {
        res.redirect('/registered');     //if found, go to registered.ejs
      } else {
        res.redirect('/');
      }
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/');
    });
});

module.exports = router;