"use strict";
exports.__esModule = true;
exports.Deputy = void 0;
var Deputy = /** @class */ (function () {
    function Deputy(name, age, gender, onestyLevel, minSum) {
        this.gender = 'input male or female'; //'Male' || 'Female'
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.onestyLevel = onestyLevel;
        (onestyLevel < 50) ? this.isTakeMoney = true : this.isTakeMoney = false;
        this.minSum = minSum;
    }
    Deputy.prototype.takeMoney = function (sum) {
        var deputyAction = 'Deputy is onesty';
        if (this.isTakeMoney) {
            if (this.minSum > sum) {
                deputyAction = 'fail! Deputy didn"t take money';
            }
            if (sum > this.minSum && sum < this.minSum * 1.1) {
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
