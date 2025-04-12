//const micromatch = require('micromatch');
const micromatch = require('..');
//const micromatch = require('../');
// micromatch(list, patterns[, options]);

console.log(micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*'])) //=> ['foo', 'bar', 'baz']
console.log(micromatch(['foo', 'bar', 'baz', 'qux'], ['*', '!b*'])) //=> ['foo', 'qux']

console.log(micromatch.isMatch('foo', 'f*')) //=> true
console.log(micromatch.isMatch('foo', ['b*', 'f*'])) //=> true
