import { DataSourceDecorator } from "./DataSourceDecorator";

export class EncryptionDecorator extends DataSourceDecorator {
    writeData(data: string): void {
        console.log('encrypting data');
        this.wrappee.writeData(data);
    }
    
    readData(): string {
        console.log('decrypting data');
        return this.wrappee.readData();
    } 
}