"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLButton = void 0;
var HTMLButton = /** @class */ (function () {
    function HTMLButton() {
    }
    HTMLButton.prototype.render = function () {
        console.log('HTML button render');
    };
    HTMLButton.prototype.onClick = function (event) {
        console.log("HTML button " + event);
    };
    return HTMLButton;
}());
exports.HTMLButton = HTMLButton;
