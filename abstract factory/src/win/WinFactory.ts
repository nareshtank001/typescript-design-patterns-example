import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { GUIFactory } from "../GUIFactory";
import { WinButton } from "./WinButton";
import { WinCheckbox } from "./WinCheckbox";

export class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }
    createCheckbox(): Checkbox {
       return new WinCheckbox();
    }
    
}