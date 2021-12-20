import { Button } from './Button';
import { Dialog } from './Dialog';
import { HTMLButton } from './HTMLButton';

export class HTMLDialog extends Dialog {
    createButton(): Button {
        return new HTMLButton();
    }
}