"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedState = void 0;
var SimpleTurnstileState_1 = require("./SimpleTurnstileState");
var UnlockedState_1 = require("./UnlockedState");
var LockedState = /** @class */ (function (_super) {
    __extends(LockedState, _super);
    function LockedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockedState.prototype.coin = function (turnstile) {
        turnstile.state = new UnlockedState_1.UnlockedState();
        turnstile.unlock();
    };
    LockedState.prototype.pass = function (turnstile) {
        turnstile.alarm();
    };
    return LockedState;
}(SimpleTurnstileState_1.SimpleTurnstileState));
exports.LockedState = LockedState;
