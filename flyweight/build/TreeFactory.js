"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeFactory = void 0;
var TreeType_1 = require("./TreeType");
var TreeFactory = /** @class */ (function () {
    function TreeFactory() {
        this.treeTypes = [];
    }
    TreeFactory.prototype.getTreeType = function (name, color, texture) {
        var type = this.treeTypes.filter(function (tree) { return tree.name === name && tree.color === color && tree.texture === texture; });
        if (type.length === 0) {
            var newTreeType = new TreeType_1.TreeType(name, color, texture);
            type.push(newTreeType);
            this.treeTypes.push(newTreeType);
        }
        return type[0];
    };
    return TreeFactory;
}());
exports.TreeFactory = TreeFactory;
