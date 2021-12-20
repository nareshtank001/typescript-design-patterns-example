"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinuxFactory = void 0;
var LinuxButton_1 = require("./LinuxButton");
var LinuxCheckbox_1 = require("./LinuxCheckbox");
var LinuxFactory = /** @class */ (function () {
    function LinuxFactory() {
    }
    LinuxFactory.prototype.createButton = function () {
        return new LinuxButton_1.LinuxButton();
    };
    LinuxFactory.prototype.createCheckbox = function () {
        return new LinuxCheckbox_1.LinuxCheckbox();
    };
    return LinuxFactory;
}());
exports.LinuxFactory = LinuxFactory;
