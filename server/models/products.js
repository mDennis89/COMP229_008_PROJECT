let mongoose = require('mongoose');

// create a model class
let Product = mongoose.Schema({
    Brand: String,
    Model: String,
    Specifications: String,
    Price: Number,

},
{
  collection: "products"
});

module.exports = mongoose.model('Product', Product);
