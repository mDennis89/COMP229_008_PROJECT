//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: ST || MD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;

