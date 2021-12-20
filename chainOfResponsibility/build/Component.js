"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.showHelp = function () {
        if (this.toolTipText) {
            console.log(this.toolTipText);
        }
        else {
            this.container.showHelp();
        }
    };
    return Component;
}());
exports.Component = Component;
