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
exports.AdvancedRemoteControl = void 0;
var RemoteControl_1 = require("./RemoteControl");
var AdvancedRemoteControl = /** @class */ (function (_super) {
    __extends(AdvancedRemoteControl, _super);
    function AdvancedRemoteControl(device) {
        return _super.call(this, device) || this;
    }
    AdvancedRemoteControl.prototype.mute = function () {
        this.device.setVolume(0);
    };
    return AdvancedRemoteControl;
}(RemoteControl_1.RemoteControl));
exports.AdvancedRemoteControl = AdvancedRemoteControl;
