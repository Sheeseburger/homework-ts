"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObjectInArray = void 0;
function updateObjectInArray(initialArray, key, value, patch) {
    var copyArray = initialArray.map(function (el) { return (__assign({}, el)); });
    var indexForUpdate = copyArray.findIndex(function (el) { return el[key] === value; });
    if (indexForUpdate === -1)
        return null;
    copyArray[indexForUpdate] = __assign(__assign({}, copyArray[indexForUpdate]), patch);
    return copyArray;
}
exports.updateObjectInArray = updateObjectInArray;
