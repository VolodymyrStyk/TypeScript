"use strict";
exports.__esModule = true;
exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird(howAnimalMove, animalSay) {
        this.howAnimalMove = howAnimalMove;
        this.animalSay = animalSay;
    }
    Bird.prototype.info = function () {
        return "Birds move: " + this.howAnimalMove + " and birds say: " + this.animalSay;
    };
    return Bird;
}());
exports.Bird = Bird;
