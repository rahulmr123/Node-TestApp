// var productDetails = require('../model');
var services = require('../services/productservices');

module.exports = function(req, res) {
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var newproduct = {
    productID: req.body.item.productID,
    name: req.body.item.name,
    price: req.body.item.price,
    quantity: req.body.item.quantity,
  };

 

  var promise = services.addtocart(newproduct);
  promise.then(
    function(result) {
      // res.send(result);
    },
    function(err) {
      res.send({
        error: 'an error has occured',
      });
      return;
    }
  );
  var a = services.findcount();

  a.then(
    function(result) {
      var response = {
        status: '200',
        total: result.length,
        result: req.body,
      };
      res.send(response);
    },
    function(err) {
      var response = {
        status: 422,
        errror: 'error occured',
      };
      res.send(response);
    }
  );
};
