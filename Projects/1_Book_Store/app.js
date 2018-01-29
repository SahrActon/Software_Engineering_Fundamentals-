// Loading the express module
var express = require('express');
var path = require('path');

var app = express();
//Creating the port where the application should run on
var port = 3004;

//Setting up some middleware
console.log(__dirname);

// looking the files in the public folder
app.use(express.static('public'));

//Setting the folder for the index file
app.use(express.static('views'));

app.get('/',function (request, response) {
    response.send('This is the route/index page 2 ');
});

app.get('/books', function (request, response) {
    response.send('Welcome to the book page');

});

app.listen(port, function () {
    console.log('I am running on this port' + port);
});