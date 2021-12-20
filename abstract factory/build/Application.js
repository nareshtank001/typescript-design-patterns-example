"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var LinuxFactory_1 = require("./linux/LinuxFactory");
var WinFactory_1 = require("./win/WinFactory");
var Application = /** @class */ (function () {
    function Application(osName) {
        switch (osName) {
            case 'Linux':
                this.factory = new LinuxFactory_1.LinuxFactory();
                break;
            case 'Window':
                this.factory = new WinFactory_1.WinFactory();
                break;
            default:
                throw new Error('Unsupported OS');
        }
    }
    Application.prototype.init = function () {
        var okButton = this.factory.createButton();
        okButton.paint();
        var termsAndConditionCheckbox = this.factory.createCheckbox();
        termsAndConditionCheckbox.paint();
    };
    return Application;
}());
exports.Application = Application;
