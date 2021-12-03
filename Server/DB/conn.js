const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://root:root@cluster0.yxgu2.mongodb.net/nuitInfo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 
var _db;

module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        // Verify we got a good "db" object
        if (db)
        {
          _db = db.db("myFirstDatabase");
          console.log("Successfully connected to MongoDB."); 
        }
        return callback(err);
           });
    },
   
    getDb: function () {
      return _db;
    },
  };