"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.prototype.render = function () {
        var okButton = this.createButton();
        okButton.render();
        okButton.onClick('close');
    };
    return Dialog;
}());
exports.Dialog = Dialog;
