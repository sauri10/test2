var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/AD_contingut_detector";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("AD_contingut_detector");
  var myquery = {cod_curso: "A2019202165501" };
  var newvalues = { $set: {f_baja_prof:'28/02/2019' } };
  dbo.collection("curso_contingut").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});