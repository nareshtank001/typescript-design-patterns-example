"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var HTMLDialog_1 = require("./HTMLDialog");
var WindowDialog_1 = require("./WindowDialog");
var Application = /** @class */ (function () {
    function Application(osName) {
        switch (osName) {
            case 'Linux':
                this.dialog = new HTMLDialog_1.HTMLDialog();
                break;
            case 'Window':
                this.dialog = new WindowDialog_1.WindowDialog();
                break;
            default:
                throw new Error('Unsupported OS');
        }
    }
    Application.prototype.init = function () {
        this.dialog.render();
    };
    return Application;
}());
exports.Application = Application;
