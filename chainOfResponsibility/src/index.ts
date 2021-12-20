import { Button } from './Button';
import { Dialog } from './Dialog';
import { Panel } from './Panel';

const dialog = new Dialog('Reports');
dialog.wikiPageURL = 'HTTP://www.wiki.com';

const panel = new Panel('Budget Reports');
panel.modelHelpText = 'Panel help text';

const okButton = new Button('OK');
okButton.toolTipText = 'ok button';

const cancelButton = new Button('CANCEL');
//cancelButton.toolTipText = 'cancel button';

panel.add(okButton);
panel.add(cancelButton);
dialog.add(panel);

dialog.showHelp();
panel.showHelp();
okButton.showHelp();
cancelButton.showHelp();