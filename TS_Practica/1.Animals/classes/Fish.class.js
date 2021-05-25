"use strict";
exports.__esModule = true;
exports.Fish = void 0;
var Fish = /** @class */ (function () {
    function Fish(howAnimalMove, animalSay) {
        this.howAnimalMove = howAnimalMove;
        this.animalSay = animalSay;
    }
    Fish.prototype.info = function () {
        return "Fishes move: " + this.howAnimalMove + " and fishes say: " + this.animalSay;
    };
    return Fish;
}());
exports.Fish = Fish;
