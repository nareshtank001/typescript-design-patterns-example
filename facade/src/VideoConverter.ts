import { BitrateReader } from "./videoConverter/BitrateReader";
import { MPEG4CompressionCodec } from "./videoConverter/MPEG4CompressionCodec";
import { OggCompressionCodec } from "./videoConverter/OggCompressionCodec";
import { VideoFile } from "./videoConverter/VideoFile";

export class VideoConverter {
    convert(fileName: string, format: string): string {
        const file = new VideoFile(fileName);
        let destinationCodec; 
        if(format === 'mp4') {
            destinationCodec = new MPEG4CompressionCodec();
        } else {
            destinationCodec = new OggCompressionCodec();
        }
        const buffer = BitrateReader.read(fileName);   
        const result = BitrateReader.convert(buffer);     
        return result;
    }
}