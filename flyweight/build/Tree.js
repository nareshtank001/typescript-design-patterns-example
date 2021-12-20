"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    Tree.prototype.draw = function (canvas) {
        this.type.draw(canvas, this.x, this.y);
    };
    return Tree;
}());
exports.Tree = Tree;
