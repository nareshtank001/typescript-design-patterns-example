"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyYoutubeClass = void 0;
var ThirdPartyYoutubeClass = /** @class */ (function () {
    function ThirdPartyYoutubeClass() {
    }
    ThirdPartyYoutubeClass.prototype.listVideos = function () {
        console.log('video list');
    };
    ThirdPartyYoutubeClass.prototype.getVideoInfo = function (id) {
        return "video id=" + id;
    };
    ThirdPartyYoutubeClass.prototype.downloadVideo = function (id) {
        console.log("downloading video by id=" + id);
    };
    return ThirdPartyYoutubeClass;
}());
exports.ThirdPartyYoutubeClass = ThirdPartyYoutubeClass;
