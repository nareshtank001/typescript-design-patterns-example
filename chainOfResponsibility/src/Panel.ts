import { Container } from './Container';
export class Panel extends Container {
    modelHelpText!: string;

    constructor(public title: string) {
        super();
    }
    showHelp(): void {
        if (this.modelHelpText) {
            console.log(this.modelHelpText);
        } else {
            super.showHelp();
        }
    }
}