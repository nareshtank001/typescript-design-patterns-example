import { Button } from './Button';

export abstract class Dialog {
    abstract createButton(): Button;
   
    render(): void {
        const okButton = this.createButton();
        okButton.render();
        okButton.onClick('close');
    }
}