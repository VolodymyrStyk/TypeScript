"use strict";
exports.__esModule = true;
exports.Wife = void 0;
var Wife = /** @class */ (function () {
    function Wife(name, age) {
        this.name = name;
        this.age = age;
    }
    Wife.prototype.action = function () {
        console.log('Do some...');
    };
    return Wife;
}());
exports.Wife = Wife;
