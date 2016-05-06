'use strict'

/**
* Inject the required dependency
**/

var url = require('url');
/**
*   Rouner component to find mapping to execute
**/
 module.exports = function(req, res){
  var urlPart = url.parse(req.url);
  var uri = urlPart.pathname || 'beers';
  var method = req.method;

  console.log('Fountd url part:' + uri + ' method is:  ' + method );

  this.getController = function(){
      return findMapping(uri, method);
  }

  }


function getMapping(){
    return [{
      uri: '/beers',
      method: 'GET',
      controller:'beerController',
      invokeMethod: 'listBeer'

    },
  {
    uri: '/beer',
    method: 'GET',
    controller:'beerController',
    invokeMethod: 'getBeer'
  },
  {
    uri: '/beer/',
    method: 'POST',
    controller: 'beerController',
    invokeMethod: 'saveBeer'

  },
  {
    uri: '/beer/',
    method: 'DELETE',
    controller:'beerController',
    invokeMethod: 'deleteBeer'

  }];
}


function findMapping(uri, method){
  var  mappings = getMapping();
  var foundMapping =   mappings.filter(function(mapping){
    console.log('Passed url part:' + uri + ' method is:  ' + method );
    console.log('Configured url part:' + mapping.uri + ' method is:  ' + mapping.method );
    var isMatchFound=(mapping.uri===uri && mapping.method===method);
      console.log('Match found' + isMatchFound);
    return (isMatchFound);
  });
return foundMapping.pop();
}
