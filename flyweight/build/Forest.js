"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forest = void 0;
var Tree_1 = require("./Tree");
var TreeFactory_1 = require("./TreeFactory");
var Forest = /** @class */ (function () {
    function Forest() {
        this.trees = [];
        this.treeFactory = new TreeFactory_1.TreeFactory();
    }
    Forest.prototype.planTree = function (x, y, name, color, texture) {
        var type = this.treeFactory.getTreeType(name, color, texture);
        var tree = new Tree_1.Tree(x, y, type);
        this.trees.push(tree);
    };
    Forest.prototype.draw = function (canvas) {
        this.trees.forEach(function (tree) {
            tree.draw(canvas);
        });
    };
    return Forest;
}());
exports.Forest = Forest;
