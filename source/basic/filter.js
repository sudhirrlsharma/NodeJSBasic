'use strict'
var nameArray = [{name:'sudhir', surname:'sharma'},{name:'rumit', surname:'patel'}];

function getObjectFromObjectsArrayByPropertyValue(objectsArray, propertyName, propertyValue) {
  return objectsArray.filter(function (objectsArrayElement) {
    return objectsArrayElement[propertyName] == propertyValue;
  });
}

var person = getObjectFromObjectsArrayByPropertyValue(nameArray, 'name', 'sudhir');
console.log(person.pop());
