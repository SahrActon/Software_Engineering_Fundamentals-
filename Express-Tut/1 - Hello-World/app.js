/**
 * Created by tommyacton on 17/07/2017.
 */

//Hello World Example of express

const express = require('express')
const app = express();

//This is the route directory 
app.get('/', function (request, response) {
    response.send('<h1 style="text-align: center">' + 'Hello Home Index ' + '</h1>');
});

/**
 * More than one callback function can handle a route(make sure you specify the
 * 'next' object)
 * **/

app.get('/example/a', function (request, response, next) {
    console.log("The response will be sent by the next function ");
    next();
}, function (request, response) {
    response.send('Hello from A')
});

var cb0 = function (request, response, next ) {
    console.log('CB0');
    next();
}

var cb1 = function (request, response, next ) {
    console.log('CB1');
    next();
    response.send("Hello from callback 1")
}

app.get('/example/b', [cb0,cb1]);

app.route


app.listen(3000, function () {
})