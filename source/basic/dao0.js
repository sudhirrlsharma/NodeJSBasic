'use strict'

module.exports = function(){
  this.save= function(){
    console.log('Saving the data');
  }

  this.getList = function(){
    console.log('fetching the list');
  }

  this.delete = function(){
    console.log('value are deleted');
  }
}
