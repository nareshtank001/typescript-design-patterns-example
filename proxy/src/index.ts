import { CachedYoutubeClass } from "./CachedYoutubeClass"
import { ThirdPartyYoutubeClass } from "./ThirdPartyYoutubeClass"
import { YoutubeManager } from "./YoutubeManager"

const aYouTubeService = new ThirdPartyYoutubeClass()
const aYouTubeProxy = new CachedYoutubeClass(aYouTubeService)
const manager = new YoutubeManager(aYouTubeProxy)
manager.reactOnUserInput()