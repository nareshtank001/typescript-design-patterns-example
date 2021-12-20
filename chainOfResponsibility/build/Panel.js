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
exports.Panel = void 0;
var Container_1 = require("./Container");
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(title) {
        var _this = _super.call(this) || this;
        _this.title = title;
        return _this;
    }
    Panel.prototype.showHelp = function () {
        if (this.modelHelpText) {
            console.log(this.modelHelpText);
        }
        else {
            _super.prototype.showHelp.call(this);
        }
    };
    return Panel;
}(Container_1.Container));
exports.Panel = Panel;
