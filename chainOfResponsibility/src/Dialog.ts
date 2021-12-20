import { Container } from './Container';
export class Dialog extends Container {
    wikiPageURL!: string;
    
    constructor(public title: string) {
        super();
    }

    showHelp(): void {
        if (this.wikiPageURL !== null) {
            console.log(this.wikiPageURL);
        } else {
            super.showHelp();
        }
    }
}