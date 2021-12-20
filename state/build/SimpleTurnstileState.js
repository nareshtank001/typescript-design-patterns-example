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
exports.SimpleTurnstileState = void 0;
var TurnstileFSM_1 = require("./TurnstileFSM");
var SimpleTurnstileState = /** @class */ (function (_super) {
    __extends(SimpleTurnstileState, _super);
    function SimpleTurnstileState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleTurnstileState.prototype.lock = function () {
        console.log('lock');
    };
    SimpleTurnstileState.prototype.unlock = function () {
        console.log('unlock');
    };
    SimpleTurnstileState.prototype.thankYou = function () {
        console.log('thankYou');
    };
    SimpleTurnstileState.prototype.alarm = function () {
        console.log('alarm');
    };
    return SimpleTurnstileState;
}(TurnstileFSM_1.TurnstileFSM));
exports.SimpleTurnstileState = SimpleTurnstileState;
