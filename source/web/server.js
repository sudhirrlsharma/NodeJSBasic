'use strict'

var option = {
   port: 8080,
   host: 'localhost'
};

var http = require('http');
var Router = require('./router');

var restController = require('./controler/beerController.js');

  var httpServer  = http.createServer(function(req, res){
    var headers = req.headers;
    var userAgent = headers['user-agent'];
    processRequest(req, res);
  });
  httpServer.listen(option.port, option.host, function(){
    console.log('Server is up sucessfully at'+  option.port );
  });



  function processRequest(req, res) {
    var body=[];
    var bodyAsString='';
    req.on('data', function(chunk){
      body.push(chunk);
    });
    req.on('end', function(){
      bodyAsString = Buffer.concat(body).toString();
    });

    req.on('error', function(err){
      console.error(error.stack);
    });

    var routerInstacne = new Router(req,res);
    var controllerMapping = routerInstacne.getController();

    var sourceFile = controllerMapping.controller
    //var controller = require('./controller/' + sourceFile) ;
    var method = controllerMapping.invokeMethod;
    var beers = restController[method].call(req,res);
     res.json(beers);
     

  }
