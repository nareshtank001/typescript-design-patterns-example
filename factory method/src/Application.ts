import { Dialog } from './Dialog';
import { HTMLDialog } from './HTMLDialog';
import { WindowDialog } from './WindowDialog';
export class Application {
    dialog: Dialog;
    constructor(osName: String) {
        switch (osName) {
            case 'Linux':
                this.dialog = new HTMLDialog();
                break;
            case 'Window':
                this.dialog = new WindowDialog();
                break;
            default:
                throw new Error('Unsupported OS');
        }
    }
    
    init() {
        this.dialog.render();
    }
}