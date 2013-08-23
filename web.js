var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var content;
// First I want to read the file
fs.readFile('index.html',"utf-8", function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
   // console.log(content);
}

app.get('/', function(request, response) {
  response.send(content.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

