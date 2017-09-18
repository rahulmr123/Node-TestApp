const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var d = mongoose.connection;
var product = new Schema(
  {
    productID: String,
    name: String,
    price: Number,
    quantity: Number,
  },
  {
    versionKey: false,
  }
);
var product = mongoose.model('addtocart1', product);
d.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = product;
