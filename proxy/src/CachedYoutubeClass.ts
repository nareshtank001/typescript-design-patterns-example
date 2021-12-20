import { ThirdPartyYoutubeLib } from './ThirdPartyYoutubeLib';
export class CachedYoutubeClass implements ThirdPartyYoutubeLib {
    constructor(private service: ThirdPartyYoutubeLib) {}

    listVideos(): void {
        this.service.listVideos();
    }
    getVideoInfo(id: number): string {
        return this.service.getVideoInfo(id);
    }
    downloadVideo(id: number): void {
       this.service.downloadVideo(id);
    }
    
}