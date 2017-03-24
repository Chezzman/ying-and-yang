var express = require('express');
var router = require('./config/router');
var methodOverride = require('method-override');
var app = express();
var port = 3000;

app.use(express.static('public'));



app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});

module.exports = app;
