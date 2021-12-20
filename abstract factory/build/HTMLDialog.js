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
exports.HTMLDialog = void 0;
var Dialog_1 = require("./Dialog");
var HTMLButton_1 = require("./HTMLButton");
var HTMLDialog = /** @class */ (function (_super) {
    __extends(HTMLDialog, _super);
    function HTMLDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLDialog.prototype.createButton = function () {
        return new HTMLButton_1.HTMLButton();
    };
    return HTMLDialog;
}(Dialog_1.Dialog));
exports.HTMLDialog = HTMLDialog;
