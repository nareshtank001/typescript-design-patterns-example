"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachedYoutubeClass = void 0;
var CachedYoutubeClass = /** @class */ (function () {
    function CachedYoutubeClass(service) {
        this.service = service;
    }
    CachedYoutubeClass.prototype.listVideos = function () {
        this.service.listVideos();
    };
    CachedYoutubeClass.prototype.getVideoInfo = function (id) {
        return this.service.getVideoInfo(id);
    };
    CachedYoutubeClass.prototype.downloadVideo = function (id) {
        this.service.downloadVideo(id);
    };
    return CachedYoutubeClass;
}());
exports.CachedYoutubeClass = CachedYoutubeClass;
