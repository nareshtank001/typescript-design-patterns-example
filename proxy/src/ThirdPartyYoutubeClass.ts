import { ThirdPartyYoutubeLib } from "./ThirdPartyYoutubeLib";

export class ThirdPartyYoutubeClass implements ThirdPartyYoutubeLib {
    listVideos(): void {
        console.log('video list')
    }
    getVideoInfo(id: number): string {
        return `video id=${id}`;
    }
    downloadVideo(id: number): void {
        console.log(`downloading video by id=${id}`);
    }
    
}