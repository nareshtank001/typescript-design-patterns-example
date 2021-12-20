"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeManager = void 0;
var YoutubeManager = /** @class */ (function () {
    function YoutubeManager(service) {
        this.service = service;
    }
    YoutubeManager.prototype.renderVideoPage = function (id) {
        console.log(this.service.getVideoInfo(id));
    };
    YoutubeManager.prototype.renderListPanel = function () {
        console.log(this.service.listVideos());
    };
    YoutubeManager.prototype.reactOnUserInput = function () {
        this.renderVideoPage(1);
        this.renderListPanel();
    };
    return YoutubeManager;
}());
exports.YoutubeManager = YoutubeManager;
