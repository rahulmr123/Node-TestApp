// var productDetails = require('../model');
var services = require('../services/productservices');
module.exports = function(req,res){
  var item ={
    min_price:parseInt(req.query.min_price),
    max_price:parseInt(req.query.max_price)
  }
  //console.log(item)
  var promise = services.getProducts(item);
  
  promise.then(function(result){
    //console.log(result)
    res.send(result)
  },function(err){
    res.send({
      error: 'an error has occured',
    });
  })
}