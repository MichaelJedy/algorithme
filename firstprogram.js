// var http = require('http');

var express = require("express");
var app = express();

app.set('view_engine', 'jade') ;

app.get('/', function(){

});

var server = app.listen(3000, function(){

}) ;


/* http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080); */