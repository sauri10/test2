var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/AD_contingut_detector";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("AD_contingut_detector");
  var query = { cod_curso: "A2019202165501" };
  dbo.collection("curso_contingut").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
