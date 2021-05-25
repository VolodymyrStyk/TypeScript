"use strict";
exports.__esModule = true;
exports.Deputy = void 0;
var Deputy = /** @class */ (function () {
    function Deputy(name, age, gender, onestyLevel, minSum) {
        this.name = name;
        this.age = age;
        if (age < 20) {
            this.age = 20;
        }
        if (age >= 90) {
            this.age = 90;
        }
        if (age >= 20 && age <= 90) {
            this.age = age;
        }
        this.gender = gender;
        if (onestyLevel < 0) {
            this.onestyLevel = 0;
        }
        if (onestyLevel >= 100) {
            this.onestyLevel = 100;
        }
        if (onestyLevel >= 0 && onestyLevel <= 100) {
            this.onestyLevel = onestyLevel;
        }
        (onestyLevel < 50) ? this.isTakeMoney = true : this.isTakeMoney = false;
        (minSum > 0) ? this.minSum = minSum : this.minSum = 0;
    }
    Deputy.prototype.takeMoney = function (sum) {
        var deputyAction = 'Deputy is honesty';
        if (this.isTakeMoney) {
            if (this.minSum > sum) {
                deputyAction = 'fail! Deputy didn"t take money';
            }
            if (sum > this.minSum && sum < this.minSum * (1 + (this.onestyLevel / 100))) {
                deputyAction = 'thinking! Deputy didn"t take money it is not enough!';
            }
            if (sum > this.minSum * 1.1) {
                deputyAction = 'Deputy took your money!';
            }
        }
        return deputyAction;
    };
    return Deputy;
}());
exports.Deputy = Deputy;
