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
exports.UnlockedState = void 0;
var LockedState_1 = require("./LockedState");
var SimpleTurnstileState_1 = require("./SimpleTurnstileState");
var UnlockedState = /** @class */ (function (_super) {
    __extends(UnlockedState, _super);
    function UnlockedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnlockedState.prototype.coin = function (turnstile) {
        turnstile.thankYou();
    };
    UnlockedState.prototype.pass = function (turnstile) {
        turnstile.state = new LockedState_1.LockedState();
        turnstile.lock();
    };
    return UnlockedState;
}(SimpleTurnstileState_1.SimpleTurnstileState));
exports.UnlockedState = UnlockedState;
