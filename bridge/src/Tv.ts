import { Device } from "./Device";

export class Tv implements Device {
    volume: number = 10;
    channel: number = 1;
    power: boolean = false;

    isEnable(): boolean {
        return this.power;
    }
    enable(): void {
        this.power = true;
    }
    disable(): void {
        this.power = false;
    }
    
    getVolume(): number {
        return this.volume;
    }
    setVolume(volume: number): void {
        this.volume = volume;
    }
    getChannel(): number {
       return this.channel;
    }
    setChannel(channel: number): void {
       this.channel = channel;
    }
}