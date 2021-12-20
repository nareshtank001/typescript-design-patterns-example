"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeType = void 0;
var TreeType = /** @class */ (function () {
    function TreeType(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
        console.log("creat tree " + name + " " + color + " " + texture);
    }
    TreeType.prototype.draw = function (canvas, x, y) {
        console.log("drawing tree  " + JSON.stringify(this) + " on " + canvas + " at " + x + " X " + y + " ");
    };
    return TreeType;
}());
exports.TreeType = TreeType;
