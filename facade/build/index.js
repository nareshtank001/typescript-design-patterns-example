"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoConverter_1 = require("./VideoConverter");
var videConverter = new VideoConverter_1.VideoConverter();
var result = videConverter.convert('test.mp4', 'mp4');
console.log(result);
