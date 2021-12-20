"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoConverter = void 0;
var BitrateReader_1 = require("./videoConverter/BitrateReader");
var MPEG4CompressionCodec_1 = require("./videoConverter/MPEG4CompressionCodec");
var OggCompressionCodec_1 = require("./videoConverter/OggCompressionCodec");
var VideoFile_1 = require("./videoConverter/VideoFile");
var VideoConverter = /** @class */ (function () {
    function VideoConverter() {
    }
    VideoConverter.prototype.convert = function (fileName, format) {
        var file = new VideoFile_1.VideoFile(fileName);
        var destinationCodec;
        if (format === 'mp4') {
            destinationCodec = new MPEG4CompressionCodec_1.MPEG4CompressionCodec();
        }
        else {
            destinationCodec = new OggCompressionCodec_1.OggCompressionCodec();
        }
        var buffer = BitrateReader_1.BitrateReader.read(fileName);
        var result = BitrateReader_1.BitrateReader.convert(buffer);
        return result;
    };
    return VideoConverter;
}());
exports.VideoConverter = VideoConverter;
