export interface Device {
    isEnable():boolean;
    enable():void;
    disable():void;
    getVolume():number;
    setVolume(volume: number):void;
    getChannel():number;    
    setChannel(channel: number):void;    
}