"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updateObjectInArray_1 = require("./updateObjectInArray");
var docs = [
    { id: 0, name: 'First' }, { id: 1, name: 'Second' }, { id: 3, name: 'frs' }
];
var newDocs = (0, updateObjectInArray_1.updateObjectInArray)(docs, 'name', 'frs', { name: 'forth' });
console.group();
console.log('old docs');
docs.forEach(function (el) { return console.log(el); });
console.groupEnd();
if (newDocs) {
    console.log('new docs ');
    newDocs.forEach(function (el) { return console.log(el); });
}
