import { Device } from "./Device";

export class RemoteControl {
    constructor(protected device: Device) { }

    togglePower(): void {
       if(this.device.isEnable()) {
           this.device.disable();
       } else {
           this.device.enable();
       }
    }

    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 10);
    }
    
    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 10);
    }
    
    channelDown(): void {
        this.device.setChannel(this.device.getChannel() - 1);
    }
    
    channelUp(): void {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}