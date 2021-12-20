"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
var Tv = /** @class */ (function () {
    function Tv() {
        this.volume = 10;
        this.channel = 1;
        this.power = false;
    }
    Tv.prototype.isEnable = function () {
        return this.power;
    };
    Tv.prototype.enable = function () {
        this.power = true;
    };
    Tv.prototype.disable = function () {
        this.power = false;
    };
    Tv.prototype.getVolume = function () {
        return this.volume;
    };
    Tv.prototype.setVolume = function (volume) {
        this.volume = volume;
    };
    Tv.prototype.getChannel = function () {
        return this.channel;
    };
    Tv.prototype.setChannel = function (channel) {
        this.channel = channel;
    };
    return Tv;
}());
exports.Tv = Tv;
