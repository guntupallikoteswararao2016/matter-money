const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = express.Router();
const app = express();


//<<PORT>>
const PORT = process.env.PORT || 5000;
//<<Db details>>
const dbName = "test";
const collectionName = "devices";

/*app()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
const profileRoutes = require("./Api/routes/profile");
app.use("/profile", profileRoutes);




console.log("EE::s1:2:---------------");
/*
db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
   // get all items
   dbCollection.find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);

      // << return response to client >>
   });

   // << db CRUD routes >>
   app.post("/itemss", (request, response) => {
      const item = request.body;
      dbCollection.insertOne(item, (error, result) => { // callback of insertOne
         if (error) throw error;
         // return updated list
         dbCollection.find().toArray((_error, _result) => { // callback of find
            if (_error) throw _error;
            response.json(_result);
         });
      });
   });

   app.get("/api/items/:id", (request, response) => {
      const itemId = request.params.id;

      dbCollection.findOne({ id: itemId }, (error, result) => {
         if (error) throw error;
         // return item
         response.json(result);
      });
   });


   app.put("/items/:id", (request, response) => {
      const itemId = request.params.id;
      const item = request.body;
      console.log("Editing item: ", itemId, " to be ", item);

      dbCollection.updateOne({ id: itemId }, { $set: item }, (error, result) => {
         if (error) throw error;
         // send back entire updated list, to make sure frontend data is up-to-date
         dbCollection.find().toArray(function (_error, _result) {
            if (_error) throw _error;
            response.json(_result);
         });
      });
   });

   app.delete("/items/:id", (request, response) => {
      const itemId = request.params.id;
      console.log("Delete item with id: ", itemId);

      dbCollection.deleteOne({ id: itemId }, function (error, result) {
         if (error) throw error;
         // send back entire updated list after successful request
         dbCollection.find().toArray(function (_error, _result) {
            if (_error) throw _error;
            response.json(_result);
         });
      });
   });

}, function (err) { // failureCallback
   throw (err);
});


app.get("/api/items", (request, response) => {

   db.initialize(dbName, collectionName, function (dbCollection) {
      dbCollection.find().toArray((error, result) => {
         if (error) throw error;
         response.json(result);
         dbCollection.close();
      });
   }, function (err) { // failureCallback
      throw (err);
   });

});

app.get("/api/username/:name", (request, response) => {
   const name = request.params.name;
   console.log(">>name<<", name);

   db.initialize('users', 'user-list', function (dbCollection) {
      dbCollection.findOne({ username: name }, (error, result) => {
         if (error) throw error;
         response.json(result || []);
         dbCollection.close();
      });
   }, function (err) { // failureCallback
      throw (err);
   });


});

app.post("/api/createuser/", (request, response) => {
   const data = request.body;
   console.log(">>post>>data", data);
   db.initialize('users', 'user-list', function (dbCollection) {
      dbCollection.insertOne(data, (error, result) => {
         if (error) throw error;
         return response.json([{ status: 'lok' }]);
      })
   }, function (err) { // failureCallback
      throw (err);
   });

});

*/