"use strict";
exports.__esModule = true;
exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat(howAnimalMove, animalSay) {
        this.howAnimalMove = howAnimalMove;
        this.animalSay = animalSay;
    }
    Cat.prototype.info = function () {
        return "Cats move: " + this.howAnimalMove + " and cats say: " + this.animalSay;
    };
    return Cat;
}());
exports.Cat = Cat;
