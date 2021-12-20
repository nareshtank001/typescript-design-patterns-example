"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowButton = void 0;
var WindowButton = /** @class */ (function () {
    function WindowButton() {
    }
    WindowButton.prototype.render = function () {
        console.log('window button render');
    };
    WindowButton.prototype.onClick = function (event) {
        console.log("window button " + event);
    };
    return WindowButton;
}());
exports.WindowButton = WindowButton;
