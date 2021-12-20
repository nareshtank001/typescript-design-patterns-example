import { DataSource } from './DataSource';

export class DataSourceDecorator implements DataSource {
    protected wrappee: DataSource;

    constructor(dataSource: DataSource) {
        this.wrappee = dataSource;
    }

    writeData(data: string): void {
        this.wrappee.writeData(data);
    }

    readData(): string {
        return this.wrappee.readData();
    }
}