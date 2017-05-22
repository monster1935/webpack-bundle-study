console.log('test1 is loaded');

var test2 = require('./test2.js');
module.exports = function () {
  console.log('this is in test1 exports function');
};
