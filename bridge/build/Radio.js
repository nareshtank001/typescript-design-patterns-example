"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var Radio = /** @class */ (function () {
    function Radio() {
        this.volume = 10;
        this.channel = 1;
        this.power = false;
    }
    Radio.prototype.isEnable = function () {
        return this.power;
    };
    Radio.prototype.enable = function () {
        this.power = true;
    };
    Radio.prototype.disable = function () {
        this.power = false;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    Radio.prototype.setVolume = function (volume) {
        this.volume = volume;
    };
    Radio.prototype.getChannel = function () {
        return this.channel;
    };
    Radio.prototype.setChannel = function (channel) {
        this.channel = channel;
    };
    return Radio;
}());
exports.Radio = Radio;
