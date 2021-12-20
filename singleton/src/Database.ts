export class Database {
    private static instance: Database;
    private constructor() { }

    static getInstance(): Database {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }

    query(text: String): void {
        console.log(`Running query ${text}`);
    }

    query(number: Number): void {
        
    }
}