'use strict'

var http = require('http');

http.createServer(function (req, res){
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello World\n');
}).listen(5303);
console.log('Server is running at http://localhost:5303');
