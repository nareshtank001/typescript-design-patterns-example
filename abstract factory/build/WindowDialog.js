"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowDialog = void 0;
var Dialog_1 = require("./Dialog");
var WindowButton_1 = require("./WindowButton");
var WindowDialog = /** @class */ (function (_super) {
    __extends(WindowDialog, _super);
    function WindowDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowDialog.prototype.createButton = function () {
        return new WindowButton_1.WindowButton();
    };
    return WindowDialog;
}(Dialog_1.Dialog));
exports.WindowDialog = WindowDialog;
