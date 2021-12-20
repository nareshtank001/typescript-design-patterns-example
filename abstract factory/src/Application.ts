import { GUIFactory } from './GUIFactory';
import { LinuxFactory } from './linux/LinuxFactory';
import { WinFactory } from './win/WinFactory';

export class Application {
    factory: GUIFactory;
    constructor(osName: String){
        switch (osName) {
            case 'Linux':
                this.factory = new LinuxFactory();
                break;
            case 'Window':
                this.factory = new WinFactory();
                break;
            default:
                throw new Error('Unsupported OS');
        }
    }

    init() {
        const okButton = this.factory.createButton();
        okButton.paint();

        const termsAndConditionCheckbox = this.factory.createCheckbox();
        termsAndConditionCheckbox.paint();
    }
}