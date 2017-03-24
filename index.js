var express = require('express');
var router = require('./config/router');
var methodOverride = require('method-override');
var app = express();
var port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('./public/html/index.html');
});

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});

module.exports = app;
