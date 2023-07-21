//  Course name: Web Application Development
//  Course code:COMP229-008
//  Assignment: Group Project
//  Group: 8
//  Team: STIIMD
//  Student ID: 301283465, 301246562
//  Student Name: Melissa Jane Dennis, Sing Cheung Tin
//  Date:   Jul 12, 2023

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
router.get('/add', (req, res, next) => {
  res.render('products/details', { title: 'Product Creation', products: {} }); // assign title and empty array
});

// POST process the Product Details page and create a new Product - CREATE
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
<<<<<<< HEAD

  let id = req.params.id;

  let productId = req.params.id;

=======
  let id = req.params.id;
>>>>>>> c657e18640a4af718ffe8e419546db5415ffa973

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
