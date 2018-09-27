console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(10, 2) ;
console.log(`The result is: ${res}` ) ;

