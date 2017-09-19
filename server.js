const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');
const mongoose = require('mongoose');
const port = 8000;
// mongoose.connect(db.url);
//console.log(db.url)
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.get('/', function(req, res) {
  res.send('hello');
});

mongoose.connect(db.url, (err, database) => {
  if (err) {
    console.log(err);
  }
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on  ' + port);
  });
});
