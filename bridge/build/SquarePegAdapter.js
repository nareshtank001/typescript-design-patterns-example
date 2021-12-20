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
exports.SquarePegAdapter = void 0;
var RoundPeg_1 = require("./RoundPeg");
var SquarePegAdapter = /** @class */ (function (_super) {
    __extends(SquarePegAdapter, _super);
    function SquarePegAdapter(peg) {
        var _this = _super.call(this, peg.getWidth()) || this;
        _this.peg = peg;
        return _this;
    }
    SquarePegAdapter.prototype.getRadius = function () {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    };
    return SquarePegAdapter;
}(RoundPeg_1.RoundPeg));
exports.SquarePegAdapter = SquarePegAdapter;
