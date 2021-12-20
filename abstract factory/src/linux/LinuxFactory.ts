import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { GUIFactory } from "../GUIFactory";
import { LinuxButton } from "./LinuxButton";
import { LinuxCheckbox } from "./LinuxCheckbox";


export class LinuxFactory implements GUIFactory {
    createButton(): Button {
        return new LinuxButton();
    }
    createCheckbox(): Checkbox {
       return new LinuxCheckbox();
    }
    
}