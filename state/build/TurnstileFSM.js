"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnstileFSM = void 0;
var LockedState_1 = require("./LockedState");
var TurnstileFSM = /** @class */ (function () {
    function TurnstileFSM() {
        this.state = new LockedState_1.LockedState();
    }
    TurnstileFSM.prototype.coin = function () {
        this.state.coin(this);
    };
    TurnstileFSM.prototype.pass = function () {
        this.state.pass(this);
    };
    return TurnstileFSM;
}());
exports.TurnstileFSM = TurnstileFSM;
