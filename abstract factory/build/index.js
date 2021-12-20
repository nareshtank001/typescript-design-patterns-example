"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = require("./Application");
var os_1 = __importDefault(require("os"));
var app = new Application_1.Application(os_1.default.type());
app.init();
