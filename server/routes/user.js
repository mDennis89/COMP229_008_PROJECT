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
  res.render('user/login');      //login.ejs
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password })
    .then((productList) => {          //new variable 'productList'
      if (productList) {
        res.render('list');     //if found, go to list.ejs
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