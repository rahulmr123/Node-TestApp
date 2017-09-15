const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var d = mongoose.connection;

d.on('error', console.error.bind(console, 'MongoDB connection error:'));

var listproduct = new Schema({
  productID: String,
  name: String,
  price: Number,
  quantity: Number,
},{
  versionKey: false
})

var listproduct = mongoose.model('Model1',listproduct,'listproduct')
module.exports = listproduct


