var cartDetails = require('../models/model');
var productDetails = require('../models/listproductmodel');
function addToCart(productObj) {
  return new Promise(function(resolve, reject) {
    var product = new cartDetails(productObj);
    cartDetails.update({productID:{$eq:productObj.productID}},{$inc:{quantity:1}});
    product.save((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
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
  console.log(item);
  return new Promise(function(resolve, reject) {
    productDetails
      .find(
        {price: {$gt: item.min_price, $lt: item.max_price}},
        {_id: 0},
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            console.log('==>', result);
            resolve(result);
          }
        }
      )
      .limit(2);
  });
}

module.exports = {
  addtocart: addToCart,
  findcount: findCount,
  getProducts: getProducts,
};
