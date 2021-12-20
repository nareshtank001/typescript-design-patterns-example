"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompoundGraphic = void 0;
var CompoundGraphic = /** @class */ (function () {
    function CompoundGraphic() {
        this.children = [];
    }
    CompoundGraphic.prototype.add = function (child) {
        this.children.push(child);
    };
    CompoundGraphic.prototype.remove = function (child) {
        var _this = this;
        this.children.forEach(function (item, index) {
            if (item === child)
                _this.children.splice(index, 1);
        });
    };
    CompoundGraphic.prototype.move = function (x, y) {
        this.children.forEach(function (item) {
            item.move(x, y);
        });
    };
    CompoundGraphic.prototype.draw = function () {
        this.children.forEach(function (item) {
            item.draw();
        });
    };
    return CompoundGraphic;
}());
exports.CompoundGraphic = CompoundGraphic;
