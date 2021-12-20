import { DataSourceDecorator } from "./DataSourceDecorator";

export class CompressionDecorator extends DataSourceDecorator {
    writeData(data: string): void {
        console.log('compressing data');
        this.wrappee.writeData(data);
    }

    readData(): string {
        console.log('un-compressing data');
        return this.wrappee.readData();
    }
}