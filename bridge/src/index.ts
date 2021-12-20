import { RemoteControl } from "./RemoteControl";
import { Tv } from "./Tv";
import { Radio } from './Radio';
import { AdvancedRemoteControl } from "./AdvancedRemoteControl";

const tv = new Tv();
const remote = new RemoteControl(tv);

console.log(tv);
remote.togglePower();
remote.channelUp();
remote.volumeUp();
console.log(tv);

const radio = new Radio();
const advancedRemote = new AdvancedRemoteControl(radio);

console.log(radio);
advancedRemote.togglePower();
advancedRemote.channelUp();
advancedRemote.volumeUp();
advancedRemote.mute();
console.log(radio);