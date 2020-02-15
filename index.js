const express = require('express')
const path = require('path')
const mongoose  = require('mongodb');
const db = require("./db");


const PORT = process.env.PORT || 5000;
const dbName = "test";
const collectionName = "devices";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



console.log("EE::1:2:---------------");
db.initialize(dbName,collectionName,
  function succ(dbCollection){
    // console.log("yses:",a.find({pin:520012}))
    dbCollection.find().toArray(function(err, result) {
      if (err) throw err;
      console.log(">>",result);
  });
  
  },
  function fail(a){console.log("ooh",a)}
  
  );