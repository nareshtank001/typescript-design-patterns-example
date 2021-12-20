"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director(builder) {
        this.builder = builder;
    }
    Director.prototype.constructSportsCar = function () {
        this.builder.setSeats(2);
        this.builder.setEngine(2500);
        this.builder.setGPS(false);
        this.builder.setTripComputer(false);
    };
    Director.prototype.constructorSUV = function () {
        this.builder.setSeats(4);
        this.builder.setEngine(1500);
        this.builder.setGPS(true);
        this.builder.setTripComputer(true);
    };
    return Director;
}());
exports.Director = Director;
