// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Use body-parser
app.use(bodyParser.urlencoded({extended: false}));

// Use ejs
app.set('view engine', 'ejs');

// Create server
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000')
});