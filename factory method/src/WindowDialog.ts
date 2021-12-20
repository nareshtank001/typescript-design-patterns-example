import { Button } from './Button';
import { Dialog } from './Dialog';
import { WindowButton } from './WindowButton';

export class WindowDialog extends Dialog {
    createButton(): Button {
        return new WindowButton();
    }
}