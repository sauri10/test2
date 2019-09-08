var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/AD_contingut_detector";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("AD_contingut_detector");
  var myobj = [
    { cod_curso: 'A2019202165501', dni_prof: '43041861', nom_curso: 'Bases de dades 1', 
    	nom_prof:'Juan', cognom_prof:'Perez', f_alta_prof:'01/02/2019', f_baja_prof:''},
    { cod_curso: 'A2019202165502', dni_prof: '43041862', nom_curso: 'Matemàtiques 1',
    	nom_prof:'Pedro', cognom_prof:'Paco', f_alta_prof:'02/02/2019', f_baja_prof:''},
    { cod_curso: 'A2019202165503', dni_prof: '43041863', nom_curso: 'Fisica 1',
    	nom_prof:'Victor', cognom_prof:'Rodriguez', f_alta_prof:'03/02/2019', f_baja_prof:''},
    { cod_curso: 'A2019202165504', dni_prof: '43041864', nom_curso: 'Circuits digitals 1',
    	nom_prof:'Juan', cognom_prof:'Perez', f_alta_prof:'04/02/2019', f_baja_prof:''}
  ];
  dbo.collection("curso_contingut").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});