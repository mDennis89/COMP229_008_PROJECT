// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the products model
let product = require('../models/products');
let user = require('../models/users');


/* GET products List page. READ */
router.get('/', (req, res, next) => {
  // find all products in the products collection
  product.find( (err, products) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('products/index', {
        title: 'Products',
        products: products
      });
    }
  });

});

//  GET the Products Details page in order to add a new Product
router.get('/add', (req, res, next) => {
  res.render('products/details', {title: 'Add Product', products: {} }); 
});

// POST process the Products Details page and create a new Product - CREATE
router.post('/add', (req, res, next) => {
  let newProduct = product({
    "Brand": req.body.brand,
    "Model": req.body.model,
    "Specification": req.body.specification,
    "Price": req.body.price,
    "Quantity": req.body.quantity
});

  product.create(newProduct, (err, product) =>{
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

// GET the Product Details page in order to edit an existing Product
router.get('/:id', (req, res, next) => {

  let id = req.params.id;

  product.findById(id, (err, productToEdit) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
        user.findById(productToEdit.userId, (err, userFound) => {
          if (err) {
            console.log(err);
            res.end(err);
          } else {
            console.log('Product:', productToEdit);
            // console.log('User:', userFound);
            //show the edit view
            res.render('products/details', {title: 'Edit My Cart', products: productToEdit })
            // res.render('products/details', {title: 'Edit My Cart', products: productToEdit, users: userFound })
          }
        })
      }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
  let id = req.params.id

  let updatedProduct = product({
      "_id": id,
      "Brand": req.body.brand,
      "Model": req.body.model,
      "Specifications": req.body.specifications,
      "Price": req.body.price,
  });

  product.updateOne({_id: id}, updatedProduct, (err) => {
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
