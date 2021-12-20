export interface ThirdPartyYoutubeLib {
    listVideos():void;
    getVideoInfo(id: number):string;
    downloadVideo(id: number):void;
}