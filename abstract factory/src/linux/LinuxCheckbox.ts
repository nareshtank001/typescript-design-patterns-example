import { Checkbox } from "../Checkbox";

export class LinuxCheckbox implements Checkbox {
    paint(): void {
        console.log('linux checkbox paint');
    }
    
}