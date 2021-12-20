"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = void 0;
var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.x = x;
        this.y = y;
    }
    Dot.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Dot.prototype.draw = function () {
        console.log(". at position " + this.x + " X " + this.y);
    };
    return Dot;
}());
exports.Dot = Dot;
