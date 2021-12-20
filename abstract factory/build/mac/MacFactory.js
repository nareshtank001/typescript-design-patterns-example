"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacFactory = void 0;
var MacButton_1 = require("./MacButton");
var MacCheckbox_1 = require("./MacCheckbox");
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        return new MacButton_1.MacButton();
    };
    MacFactory.prototype.createCheckbox = function () {
        return new MacCheckbox_1.MacCheckbox();
    };
    return MacFactory;
}());
exports.MacFactory = MacFactory;
