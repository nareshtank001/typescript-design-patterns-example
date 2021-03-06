"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("./Button");
var Dialog_1 = require("./Dialog");
var Panel_1 = require("./Panel");
var dialog = new Dialog_1.Dialog('Reports');
dialog.wikiPageURL = 'HTTP://www.wiki.com';
var panel = new Panel_1.Panel('Budget Reports');
panel.modelHelpText = 'Panel help text';
var okButton = new Button_1.Button('OK');
okButton.toolTipText = 'ok button';
var cancelButton = new Button_1.Button('CANCEL');
//cancelButton.toolTipText = 'cancel button';
panel.add(okButton);
panel.add(cancelButton);
dialog.add(panel);
dialog.showHelp();
panel.showHelp();
okButton.showHelp();
cancelButton.showHelp();
