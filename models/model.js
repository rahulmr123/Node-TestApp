const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var d = mongoose.connection;
var product = new Schema(
  {
    productID: {
      type:String,
      required:true},
    name: {type:String,required:true},
    price: {type:Number,required:true},
    quantity: {type:Number,required:true}
  },
  {
    versionKey: false,
  }
);
var product = mongoose.model('addtocart1', product);
d.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = product;
