import { CompressionDecorator } from './CompressionDecorator';
import { EncryptionDecorator } from './EncryptionDecorator';
import { FileDataSource } from './FileDataSource';

const source = new FileDataSource();
source.writeData('plain data');
source.readData();

console.log('===========')
const compressor = new CompressionDecorator(source);
compressor.writeData('compress data');
compressor.readData();


console.log('===========')
const encrypt = new EncryptionDecorator(source);
encrypt.writeData('encrypt data');
encrypt.readData();