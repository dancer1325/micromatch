const micromatch = require('..');

// 1.   `micromatch(list, patterns[, options]): []`
console.log(micromatch(['a.js', 'a.txt'], ['*.js']));
