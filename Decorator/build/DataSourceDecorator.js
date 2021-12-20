"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceDecorator = void 0;
var DataSourceDecorator = /** @class */ (function () {
    function DataSourceDecorator(dataSource) {
        this.wrappee = dataSource;
    }
    DataSourceDecorator.prototype.writeData = function (data) {
        this.wrappee.writeData(data);
    };
    DataSourceDecorator.prototype.readData = function () {
        return this.wrappee.readData();
    };
    return DataSourceDecorator;
}());
exports.DataSourceDecorator = DataSourceDecorator;
