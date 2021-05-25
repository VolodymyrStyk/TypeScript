"use strict";
exports.__esModule = true;
exports.VerkhovnaRada = void 0;
var VerkhovnaRada = /** @class */ (function () {
    function VerkhovnaRada(radaParties, radaSpeaker) {
        this.radaParties = radaParties;
        this.radaSpeaker = radaSpeaker;
    }
    VerkhovnaRada.prototype.addNewParty = function (party) {
        this.radaParties.push(party);
    };
    VerkhovnaRada.prototype.delParty = function (party) {
        return this.radaParties = this.radaParties.filter(function (value) { return value !== party; });
    };
    VerkhovnaRada.prototype.showAllParties = function () {
        return this.radaParties;
    };
    VerkhovnaRada.prototype.showSomeParty = function (party) {
        return this.radaParties.filter(function (value) { return value === party; });
    };
    VerkhovnaRada.prototype.showMoneyTakerSuperstarOfAll = function () {
        var arrMoneyTaker = [];
        for (var _i = 0, _a = this.radaParties; _i < _a.length; _i++) {
            var parties = _a[_i];
            arrMoneyTaker.push(parties.showMoneyTakerSuperstar());
        }
        arrMoneyTaker.sort(function (a, b) {
            return b.minSum - a.minSum;
        });
        return arrMoneyTaker[0];
    };
    return VerkhovnaRada;
}());
exports.VerkhovnaRada = VerkhovnaRada;
