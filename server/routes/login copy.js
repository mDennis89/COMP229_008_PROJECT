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

console.log("userRoute1");
router.get('/', (req, res) => {
  console.log("userRoute2");
  res.render('user/login', {      //login.ejs
    title: 'Sign In'
  });
  console.log("userRoute2.1");
});
console.log("userRoute2.2");

// router.get('/login', (req, res) => {
//   console.log("userRoute2.3");
//   res.render('login');
// });

// router.post('/login', (req, res) => {
//   console.log("userRoute3");

//   const { userid, password } = req.body;
//   User.findOne({ userid, password })
//     .then((user) => {          //new variable 'productList'
//     console.log("userRoute4: " + userid, + password);
//       if (user) {
//         res.render('products');     //if found, go to products.ejs
//         console.log('userRoute5');
//       } else {
//         res.redirect('/');
//         console.log('userRoute6');
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.redirect('/');
//     });
// });

router.post('/login', (req, res) => {
  const { userid, password } = req.body;

  User.findOne({ userid, password })
    .then((user) => {
      if (user) {
        console.log("user found");
        // req.session.user = user;
        req.session.authenticated = true; // Set the authenticated flag in the session
        res.redirect('/products');
      } else {
        console.log("user not found");
        res.redirect('/');
      }
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/');
    });
});

module.exports = router;