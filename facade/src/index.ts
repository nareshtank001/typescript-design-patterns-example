import { VideoConverter } from "./VideoConverter";

const videConverter = new VideoConverter();
const result = videConverter.convert('test.mp4', 'mp4');
console.log(result);