"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CachedYoutubeClass_1 = require("./CachedYoutubeClass");
var ThirdPartyYoutubeClass_1 = require("./ThirdPartyYoutubeClass");
var YoutubeManager_1 = require("./YoutubeManager");
var aYouTubeService = new ThirdPartyYoutubeClass_1.ThirdPartyYoutubeClass();
var aYouTubeProxy = new CachedYoutubeClass_1.CachedYoutubeClass(aYouTubeService);
var manager = new YoutubeManager_1.YoutubeManager(aYouTubeProxy);
manager.reactOnUserInput();
