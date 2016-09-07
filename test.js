let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural("котик;котика;котиков", 5), 'котиков');
assert.equal(plural("отправка;отправки;отправок", 128), 'отправок');
assert.equal(plural("отправка;отправки;отправок", 2), 'отправки');
assert.equal(plural("слово;слова;слов", 13), 'слов');
assert.equal(plural("коллайдер;коллайдер;коллайдеров", 15), 'коллайдеров');
assert.equal(plural("раз;раза;раз", 100), 'раз');
assert.equal(plural("случайность;случайности;случайностей", 1457), 'случайностей');
assert.equal(plural("скрипт;скрипта;скриптов", 0), 'скриптов');
assert.equal(plural("тест;теста;тестов", 1), 'тест');
