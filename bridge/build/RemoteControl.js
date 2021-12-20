"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
var RemoteControl = /** @class */ (function () {
    function RemoteControl(device) {
        this.device = device;
    }
    RemoteControl.prototype.togglePower = function () {
        if (this.device.isEnable()) {
            this.device.disable();
        }
        else {
            this.device.enable();
        }
    };
    RemoteControl.prototype.volumeDown = function () {
        this.device.setVolume(this.device.getVolume() - 10);
    };
    RemoteControl.prototype.volumeUp = function () {
        this.device.setVolume(this.device.getVolume() + 10);
    };
    RemoteControl.prototype.channelDown = function () {
        this.device.setChannel(this.device.getChannel() - 1);
    };
    RemoteControl.prototype.channelUp = function () {
        this.device.setChannel(this.device.getChannel() + 1);
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
