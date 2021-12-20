import { Checkbox } from "../Checkbox";

export class WinCheckbox implements Checkbox {
    paint(): void {
        console.log('Windows checkbox paint');
    }

}