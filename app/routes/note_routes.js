
const addtocart = require('../../controllers/addtocart')
const getproducts = require('../../controllers/listproducts')
var services = require('../../services/productservices');
//console.log(productDetails)
module.exports = function(app, db) {
  app.post('/add_to_cart', addtocart);
  app.get('/get_products',getproducts); 
}
