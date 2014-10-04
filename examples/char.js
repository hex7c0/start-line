'use strict';
/**
 * @file read first char example
 * @module startline
 * @package startline
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var startline = require('../index.min.js'); // use require('startline') instead
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

// print L
var readline = startline({
    file: 'lorem.txt',
    end: 0,
});

readline.on('line',function(line) {

    console.log(line);
    return;
});
readline.on('close',function(line) {

    console.log('read ' + readline.head);
    return;
});
