const notes = require('./notes.js');
// var _ = require('lodash');  // lodash('_' -> defined)

console.log('linked file is available');

var year = 24;
var res = notes.addNumber(year+18, 10);

console.log(year);
console.log('result is now '+res);


// var data = ['boy', 'girl', 1, 2, 3, 2, 1, 'name', '2', 'roll'];
// print unique data using lodash('_')
// var unique = _.uniq(data);
// console.log(unique);

// console.log(_.isString(true));
