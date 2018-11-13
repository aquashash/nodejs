//Build a webserver using express

var express = require('express');
var url = require('url');
var app = express();

app.get('/', function(req, res){
    var queryObject = url.parse(req.url, true).query;
    var greeting = queryObject.greeting || "Default greeting"
    res.send('This is my node app with express! ' + greeting);
});

app.listen(8080, function(){
    console.log('Server listening on port 8080');
})

