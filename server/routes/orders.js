// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the products model
let order = require('../models/orders tmp');


/* GET products List page. READ */
router.get('/', (req, res, next) => {
  // find all products in the products collection
  order.find( (err, orders) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('products/list', {
        title: 'Products',
        products: products
      });
    }
  });

});

module.exports = router;