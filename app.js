var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
var util = require("util");
var express = require("express");
var pug = require("pug");
var bodyParser = require('body-parser');
var multer = require('multer');

var upload = multer();
var app = express();

const MongoClient = require('mongodb').MongoClient;


app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './person');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res){
  MongoClient.connect("mongodb://localhost:27017/nodeproject", function (err, db) {

    var users = [];
    app.post('/', function(req, res){
        if(!req.body.username)
        {
          req.status("400");
          res.send("invalid request");
        });
        }
        else
        {
          users.filter(function(user){



          });

        }
      }
    db.collection("profile").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result)
    });

    var myquery = { firstName: "vikram" };
       var newvalues = { name: "vikusharma", password: 3030 };
       db.collection("profile").updateOne(myquery, newvalues, function(err, res) {
         if (err) throw err;
         console.log(res)

    });

  });
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(3131);


// var server = http.createServer(function(request, response){
// displayForm(response);
// processAllFieldsOfTheForm(request, response);
// });
// server.listen(3131);
// console.log('Server Exec on 3131 Port !');
