var cartDetails = require('../models/model');
var productDetails = require('../models/listproductmodel');
function addToCart(productObj) {
  return new Promise(function(resolve, reject) {
    cartDetails.find({productID: productObj.productID}, (err, result) => {
      if (result.length != 0) {
        cartDetails.update(
          {productID: productObj.productID},
          {quantity: productObj.quantity},
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      } else {
        console.log('cretaed');
        var product = new cartDetails(productObj);
        product.save((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
      if (err) {
        reject(err);
      }
    });
  });
}

function findCount() {
  return new Promise(function(resolve, reject) {
    cartDetails.find().exec((err, result) => {
      var count = result.length;
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
function getProducts(item) {
  console.log('sent', item);
  return new Promise(function(resolve, reject) {
    productDetails
      .find(
        {price: {$gt: item.min_price, $lt: item.max_price}},
        {_id: 0},
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            //console.log('==>', result);
            resolve(result);
          }
        }
      )
      .limit(item.limit);
  });
}

module.exports = {
  addtocart: addToCart,
  findcount: findCount,
  getProducts: getProducts,
};
