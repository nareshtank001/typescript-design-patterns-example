import { DataSource } from "./DataSource";

export class FileDataSource implements DataSource {
    writeData(data: string): void {
        console.log(`writing ${data}`);
    }
    readData(): string {
        console.log(`reading data`);
        return 'readData';
    }

}