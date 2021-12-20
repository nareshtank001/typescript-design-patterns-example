import { Device } from "./Device";
import { RemoteControl } from "./RemoteControl";

export class AdvancedRemoteControl extends RemoteControl {
    constructor(device: Device) {
        super(device);
    }

    mute():void {
        this.device.setVolume(0);
    }
}