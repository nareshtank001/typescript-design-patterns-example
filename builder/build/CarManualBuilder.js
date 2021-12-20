"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarManualBuilder = void 0;
var Manual_1 = require("./Manual");
var CarManualBuilder = /** @class */ (function () {
    function CarManualBuilder() {
        this.manual = new Manual_1.Manual();
    }
    CarManualBuilder.prototype.reset = function () {
        this.manual = new Manual_1.Manual();
    };
    CarManualBuilder.prototype.setSeats = function (seatCount) {
        this.manual.seatingCapacity = "this car has " + seatCount + " seats";
    };
    CarManualBuilder.prototype.setEngine = function (engineCapacity) {
        this.manual.engineSize = "this car has engine with " + engineCapacity + " cc";
    };
    CarManualBuilder.prototype.setTripComputer = function (hasTripComputer) {
        this.manual.hasTripComputer = "this car has" + (hasTripComputer ? '' : 'no') + " trip computer";
    };
    CarManualBuilder.prototype.setGPS = function (hasGPS) {
        this.manual.hasGPS = "this car has trip " + (hasGPS ? '' : 'no') + " GPS";
    };
    CarManualBuilder.prototype.getProduct = function () {
        return this.manual;
    };
    return CarManualBuilder;
}());
exports.CarManualBuilder = CarManualBuilder;
