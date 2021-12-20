"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuilder = void 0;
var Car_1 = require("./Car");
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car_1.Car();
    }
    CarBuilder.prototype.reset = function () {
        this.car = new Car_1.Car();
    };
    CarBuilder.prototype.setSeats = function (seatCount) {
        this.car.seatingCapacity = seatCount;
    };
    CarBuilder.prototype.setEngine = function (engineCapacity) {
        this.car.engineSize = engineCapacity;
    };
    CarBuilder.prototype.setTripComputer = function (hasTripComputer) {
        this.car.hasTripComputer = hasTripComputer;
    };
    CarBuilder.prototype.setGPS = function (hasGPS) {
        this.car.hasGPS = hasGPS;
    };
    CarBuilder.prototype.getProduct = function () {
        return this.car;
    };
    return CarBuilder;
}());
exports.CarBuilder = CarBuilder;
