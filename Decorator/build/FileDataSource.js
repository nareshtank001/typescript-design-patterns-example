"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDataSource = void 0;
var FileDataSource = /** @class */ (function () {
    function FileDataSource() {
    }
    FileDataSource.prototype.writeData = function (data) {
        console.log("writing " + data);
    };
    FileDataSource.prototype.readData = function () {
        console.log("reading data");
        return 'readData';
    };
    return FileDataSource;
}());
exports.FileDataSource = FileDataSource;
