// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the products model
let product = require('../models/products');

router.get('/checkout', (req, res, next) => {
  const selectedProductIds = req.query.selectedProducts; // Retrieve selected product IDs from URL query parameters

  // Use Mongoose to fetch the selected products from the database
  product.find({ _id: { $in: selectedProductIds } })
    .then((selectedProducts) => {
      res.render('products/checkout', { selectedProducts });
    })
    .catch((err) => {
      // Handle error if fetching products fails
      console.error('Error fetching selected products:', err);
      res.redirect('/error'); // Redirect to an error page if needed
    });
});


module.exports = router;