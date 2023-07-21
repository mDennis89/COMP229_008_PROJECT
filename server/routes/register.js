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

console.log("userRoute11");
router.get('/', (req, res) => {
  console.log("userRoute21");
  res.render('user/register', {      //login.ejs
    title: 'User Registration',
  });
});

router.post('/register', (req, res) => {
  const { userid, password, email, } = req.body;
  
  console.log("userRoute31");
  User.findOne({ userid, password, firstname, lastname, email, phonenumber, mailaddress })
    .then((user) => {          //new variable 'productList'
    console.log("userRoute41: " + userid, + password);
      if (user) {
        res.redirect('/registered');     //if found, go to products.ejs
        console.log('userRoute5');
      } else {
        res.redirect('/');
        console.log('userRoute6');
      }
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/');
    });
});

module.exports = router;