var services = require('../services/productservices');
var paramTypeCheck = true;
module.exports = function(req, res) {
  Object.keys(req.query).forEach(val => {
    if (paramTypeCheck && !isNaN(req.query[val])) {
      paramTypeCheck = true;
    } else {
      paramTypeCheck = false;
    }
  });
  if (paramTypeCheck === false) {
    var err = {
      status: 422,
      error: 'Invalid Parameters',
    };

    paramTypeCheck = true;
    return res.send(err);
  }

  minPrice = parseInt(req.query.min_price) || 0;
  maxPrice = parseInt(req.query.max_price) || 1000000;
  limit = parseInt(req.query.limit) | 0;
  var item = {
    min_price: minPrice,
    max_price: maxPrice,
    limit: limit,
  };
  var promise = services.getProducts(item);

  promise.then(
    function(result) {
      var response = {
        status: 200,
        total: result.length,
        result: result,
      };

      res.send(response);
    },
    function(err) {
      res.send({
        error: 'an error has occured',
      });
    }
  );
};
