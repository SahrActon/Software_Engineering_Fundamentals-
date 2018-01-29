var express = require('express');
var app = express();
var port = 5000;

// The route
app.get("/", function (req, res) {
    res.send("welcome to the home page <\h1>");
});

app.get("/books", function (req,res) {
    res.send("Welcome to the books Page");
})


app.listen(5000, function (err) {
    if (err){
    }
    console.log("Running server on port " + port)
});