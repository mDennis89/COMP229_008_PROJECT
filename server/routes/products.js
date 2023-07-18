// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the product model
let product = require('../models/products');

/* GET products List page. READ */
router.get('/', (req, res, next) => {
  // find all products in the products collection
  product.find((err, products) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('products/index', {
        title: 'Product Details',
        products: products
      });
    };
  });
});

//  GET the Product Details page in order to add a new Product
// Q.2a
router.get('/add', (req, res, next) => {
  res.render('products/details', { title: 'Add product', products: {} }); // assign title and empty array
});

// POST process the Product Details page and create a new Product - CREATE
// Q.2b
router.post('/add', (req, res, next) => {
  // get the properties and assign to newProduct
  let { brand, model, specifications, price, quantity } = req.body;
  let newProduct = new product({
    Brand: brand,
    Model: model,
    Specifications: specifications,
    Price: price,
    Quantity: quantity
  });

  // debug
  // console.log("Add debug");
  // console.log(newProduct);
  // res.redirect('/products');
  // return;

  // save to DB
  newProduct.save()
    .then(() => {
      res.redirect('/products');
    })
    .catch((err) => {
      return console.error(err);
    });
});

// GET the Product Details page in order to edit an existing Product
// Q.2c
router.get('/:id', (req, res, next) => {
  let productId = req.params.id;

  // get the product info and then redirect to details page with the data
  product.findById(productId)
    .exec()
    .then((products) => {
      if (products) {
        res.render('products/details', { title: 'Product Update', products: products });
      } else {
        console.error('Product is not found.');
      }
    })
    .catch((err) => {
      console.error('Error retrieving product: ', err);
    });
});

// POST - process the information passed from the details form and update the document
// Q.2d
router.post('/:id', (req, res, next) => {
  let productId = req.params.id;
  let { brand, model, specifications, price, quantity } = req.body;

  // get the updated product info and then update DB
  product.findByIdAndUpdate(productId, {
    Brand: brand,
    Model: model,
    Specifications: specifications,
    Price: price,
    Quantity: quantity
    })
    .exec()
    .then(() => {
      res.redirect('/products');
    })
    .catch((err) => {
      console.error('Error updating product: ', err);
    });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  product.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh the Product list
          res.redirect('/products');
      }
  });
});


module.exports = router;
