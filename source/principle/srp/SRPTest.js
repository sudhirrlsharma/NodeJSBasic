'use strict'
var employeeFactory = require('./SRP');
console.log(employeeFactory);
var employee = employeeFactory.createEmployee('Sudhir ', ' Sharma');
console.log(employeeFactory.getFullName());
