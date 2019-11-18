const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

var config = require('./config');
var setupController = require('./api/controller/setupController');
var todoController = require('./api/controller/todoController');

var app = express();
var port = process.env.Port || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
// sử dụng template
app.set('view engine', 'ejs');
// kết nối DB
mongoose.connect(config.getDBconnection(), { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
    if(err){
        console.log('MongoDB connected error: ' + err);
    } else {
        console.log('MongoDB connected successfull');
    }
});

setupController(app);
todoController(app);
app.get('/', function(req, res){
    res.render('index');
});

app.listen(port, function(){
    console.log('Sever is listening on port: ' + port);
})