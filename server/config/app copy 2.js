//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: STIIMD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

// moddules for node and express
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session'); // Add the session middleware
let User = require('../models/users');

// import "mongoose" - required for DB Access
let mongoose = require('mongoose');
// URI
let DB = require('./db');
mongoose.connect(process.env.URI || DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log("Connected to MongoDB...");
});


// define routers
let index = require('../routes/index'); // top level routes
let products = require('../routes/products'); // routes for products
let login = require('../routes/login');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /client
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client')));

//sesion
app.use(session({
  secret: 'sessionsecretkey',
  resave: false,
  saveUninitialized: true
}));

// route redirects
app.use('/', index);
app.use('/products', products);
app.use('/login', login);

// app.use(express.urlencoded({ extended: true }));

// Login routes
// app.get('/login', (req, res) => {
//   res.render('login');
// });

// app.post('/login', (req, res) => {
//   const { userid, password } = req.body;

//   User.findOne({ userid, password })
//     .then((user) => {
//       if (user) {
//         console.log("user found");
//         // req.session.user = user;
//         req.session.authenticated = true; // Set the authenticated flag in the session
//         res.redirect('/products');
//       } else {
//         console.log("user not found");
//         res.redirect('/');
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.redirect('/');
//     });
// });

// Middleware function to check if user is authenticated
// const isAuthenticated = (req, res, next) => {
//   if (req.session && req.session.authenticated) {
//     next();  // User is authenticated
//   } else {
//     res.redirect('/login');    // User is not authenticated, redirect to login page
//   }
// };

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
