"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTurnstile = void 0;
var SimpleTurnstile = /** @class */ (function () {
    function SimpleTurnstile() {
    }
    SimpleTurnstile.prototype.lock = function () {
        console.log('lock');
    };
    SimpleTurnstile.prototype.unlock = function () {
        console.log('unlock');
    };
    SimpleTurnstile.prototype.thankYou = function () {
        console.log('thankYou');
    };
    SimpleTurnstile.prototype.alarm = function () {
        console.log('alarm');
    };
    return SimpleTurnstile;
}());
exports.SimpleTurnstile = SimpleTurnstile;
