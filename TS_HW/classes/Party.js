"use strict";
exports.__esModule = true;
exports.Party = void 0;
var Party = /** @class */ (function () {
    function Party(name, mainMember, partyMembers) {
        this.name = name;
        this.mainMember = mainMember;
        this.partyMembers = partyMembers;
    }
    Party.prototype.addNewDeputy = function (deputy) {
        this.partyMembers.push(deputy);
    };
    Party.prototype.delDeputy = function (deputy) {
        return this.partyMembers = this.partyMembers.filter(function (value) { return value !== deputy; });
    };
    Party.prototype.showAllDeputies = function () {
        return this.partyMembers;
    };
    Party.prototype.showAllWhoTakeMoney = function () {
        return this.partyMembers.filter(function (value) { return value.isTakeMoney === true; });
    };
    Party.prototype.showMoneyTakerSuperstar = function () {
        var deputy = this.partyMembers.filter(function (value) { return value.isTakeMoney === true; }).sort(function (a, b) {
            return b.minSum - a.minSum;
        });
        return deputy[0];
    };
    return Party;
}());
exports.Party = Party;
