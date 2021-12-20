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
exports.EncryptionDecorator = void 0;
var DataSourceDecorator_1 = require("./DataSourceDecorator");
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EncryptionDecorator.prototype.writeData = function (data) {
        console.log('encrypting data');
        this.wrappee.writeData(data);
    };
    EncryptionDecorator.prototype.readData = function () {
        console.log('decrypting data');
        return this.wrappee.readData();
    };
    return EncryptionDecorator;
}(DataSourceDecorator_1.DataSourceDecorator));
exports.EncryptionDecorator = EncryptionDecorator;
