"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
var Test = /** @class */ (function () {
    function Test(repo, test) {
        if (repo === void 0) { repo = ''; }
        this.repo = repo;
    }
    Test.prototype.add = function () {
        this.repo.add(this);
    };
    return Test;
}());
exports.Test = Test;
