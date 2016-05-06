
var url = require('url');

module.exports = function(req, res){

  var beerData = [{
    beerId: '1',
    name: 'Kingfisher'
  },
  {
    beerId: '2',
    name: 'bakadi'
},
  {
    beerId: '3',
    name: 'smranoff'
  }
];

this.listBeer = function(){
  return beerData;
}

this.getBeer = function(req,res){
  var id = getBeerId(req);
  var beer = getBeerById(id);
  return beer;

}

this.saveBeer = function(req,res){
  jsonObject = JSON.parse(data);


}

getBeerId = function(req){
  var urlPart = url.parse(req.url);
  var uri = urlPart.pathname || 'beers';
  var id = uri.split('/');
  return id;
}

getBeerById = function(id){
  var beer = beerData.filter(function(beer){
    return id===beer.beerId;
  });



  return beer;

}


}
