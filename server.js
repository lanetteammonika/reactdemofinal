var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var MongoClient = require('mongodb').MongoClient;
var db;
var mongo = require('mongodb-wrapper');
//Establish Connection
MongoClient.connect('mongodb://127.0.0.1:27017/empdb', function (err, database) {
    if (err)
        throw err
    else
    {
        db = database;
        console.log('Connected to MongoDB');
        //Start app only after connection is ready
        app.listen(4000);

    }
});


app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    db.collection("Users").find({}).toArray(function(err, result) {
        if (err) throw err;
        //console.log(result);

        res.send(result);

    });
});

app.post('/insert', function(req, res) {
    console.log(req.body);
    db.collection("Users").insert(req.body, function (err) {
        if (err)
            res.send('Error');
        else {
            res.send('Success');
        }
    });
});

app.put('/login', function (req, res) {
   // var users = req.app;
   // var email = req.body.email;
    var email = new mongo.ObjectID(req.params.email);
    var password = new mongo.ObjectID(req.params.password);
  //  var password = req.body.password;
    if (email.length > 0 && password.length > 0) {
        //  users.findOne({email: email, password: password}, function (err, user) {
        db.collection("Users").findOne({email: email, password: password}, function (err) {
            if (err) {
                res.send('Error');
                //res.json({status: 0, message: err});
            }
            else {
                res.send('Success');
                //res.json({status: 0, msg: "Invalid Fields"});
            }
        })
    }

});

app.delete('/delete/:_id', function(req, res){
    // console.log(req.params._id);
    var id = new mongo.ObjectID(req.params._id);
    //console.log(id);
    db.collection("Users").remove({_id:id},function(err){

        if (err)
            res.send('err');
        else

            res.send('Success');
    });
});

app.post('/update/:_id', function(req, res) {


    //console.log(req.params._id);
    var id = new mongo.ObjectID(req.params._id);
    var name= req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    console.log(name);


    console.log(req.body);
    db.collection("Users").updateOne({_id:id},req.body, function (err) {
        if (err)
            res.send('Error');
        else
            res.send('Success');

    });
});

app.post('/signin',function(req,res){
    var email=req.body.email;
    console.log(email);
    var password=req.body.password;
    db.collection("Users").findOne({email: email, password: password}, function (err, data) {
        if (err != null) {
            res.send({ status: 0, error: err });
            //res.json({status: 0, message: err});
        }
        else {
             res.send({ status: 1, data: data });
            // console.log(res);

            //res.json({status: 0, msg: "Invalid Fields"});
        }
    })
});