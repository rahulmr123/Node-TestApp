var services = require('../services/productservices');
module.exports = function(req, res) {
  var item = {
    min_price: req.query.min_price ? req.query.min_price : null,
    max_price: req.query.max_price ? req.query.max_price : null,
    limit: req.query.limit ? req.query.limit : null,
  };
//  console.log('===>', item);
  //console.log(req.query.min_price)
if(item.min_price===null || item.max_price===null || item.limit===null){
  if(item.min_price===null)
    item.min_price=0;
  if(item.max_price===null){
    item.max_price=1000000;
  }
if(item.limit===null){
  item.limit=0;
}
console.log("===>",item)
if (
  (isNaN(item.min_price) ||
    isNaN(item.max_price) ||
    isNaN(item.limit)) === true
) {
  console.log("fdsfdhjfgdsjfg")
  var response = {
    status: 422,
    error: 'wrong request type',
  };
  res.send(response);
  return;
}
item.limit = parseInt(item.limit)
console.log("dsfdsf",item)
var promise = services.getProducts(item);

promise.then(
  function(result) {
    var response = {
      status: 200,
      total: result.length,
      result: result,
    };
    //console.log(result)
    res.send(response);
  },
  function(err) {
    res.send({
      error: 'an error has occured',
    });
  }
);
return;
}



  if (
    (isNaN(req.query.min_price) ||
      isNaN(req.query.max_price) ||
      isNaN(req.query.limit)) === true
  ) {
    var response = {
      status: 422,
      error: 'wrong request type',
    };
    res.send(response);
    return;
  } else {
    (item.min_price = parseInt(req.query.min_price)),
      (item.max_price = parseInt(req.query.max_price));
    item.limit = parseInt(req.query.limit);

    var promise = services.getProducts(item);

    promise.then(
      function(result) {
        var response = {
          status: 200,
          total: result.length,
          result: result,
        };
        //console.log(result)
        res.send(response);
      },
      function(err) {
        res.send({
          error: 'an error has occured',
        });
      }
    );
  }
};
