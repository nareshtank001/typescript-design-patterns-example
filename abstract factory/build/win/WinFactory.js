"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinFactory = void 0;
var WinButton_1 = require("./WinButton");
var WinCheckbox_1 = require("./WinCheckbox");
var WinFactory = /** @class */ (function () {
    function WinFactory() {
    }
    WinFactory.prototype.createButton = function () {
        return new WinButton_1.WinButton();
    };
    WinFactory.prototype.createCheckbox = function () {
        return new WinCheckbox_1.WinCheckbox();
    };
    return WinFactory;
}());
exports.WinFactory = WinFactory;
