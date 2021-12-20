"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.getInstance = function () {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    };
    Database.prototype.query = function (text) {
        console.log("Running query " + text);
    };
    Database.prototype.query = function (number) {
    };
    return Database;
}());
exports.Database = Database;
