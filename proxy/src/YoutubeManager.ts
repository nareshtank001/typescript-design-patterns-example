import { ThirdPartyYoutubeLib } from "./ThirdPartyYoutubeLib";

export class YoutubeManager {
    constructor(private service: ThirdPartyYoutubeLib) { }

    renderVideoPage(id: number): void {
        console.log(this.service.getVideoInfo(id));
    }

    renderListPanel(): void {
        console.log(this.service.listVideos());
    }

    reactOnUserInput(): void {
        this.renderVideoPage(1);
        this.renderListPanel()
    }
}