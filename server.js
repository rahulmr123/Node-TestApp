const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');
const mongoose       = require('mongoose')
const port = 8080;
// mongoose.connect(db.url);
//console.log(db.url)
app.use(bodyParser.json())
app.get('/',function(req,res){
  res.send("hello")
})


mongoose.connect(db.url,(err,database)=>{    
  if(err){
    console.log(err);
  }
  require('./app/routes')(app,database);

app.listen(port, () => {
  console.log('We are live on  ' + port);
  
})
})
