let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0), 'отправок');
assert.equal(plural(1), 'отправка');
assert.equal(plural(2), 'отправки');
assert.equal(plural(13), 'отправок');
assert.equal(plural(15), 'отправок');
assert.equal(plural(100), 'отправок');
