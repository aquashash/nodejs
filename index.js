//Build a webserver using express

var express = require('express');
var url = require('url');
var app = express();
var morgan = require('morgan');

app.use(morgan('short'));

app.get('/', function(req, res){
    res.send('The home page');
});

app.get('/greet/:statement', function(req, res){
    var greeting = req.params.statement || "Default greeting"
    res.setHeader('token', 'my.little.secret');
    res.status(201).send('This is my node app with express! ' + greeting);
});

app.use(function(req, res){
    res.status(404).send('Page not found. Try again');
});
app.listen(8080, function(){
    console.log('Server listening on port 8080');
})

