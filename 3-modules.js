// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share the minimim)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative_flavor');
require('./7-mind_grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);