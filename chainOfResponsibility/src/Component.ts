import { ComponentWithContextualHelp } from './ComponentWithContextualHelp';
import { Container } from './Container';
export abstract class Component implements ComponentWithContextualHelp {
    toolTipText!: string;
    container!: Container;
    showHelp(): void {
        if (this.toolTipText) {
            console.log(this.toolTipText);
        } else {
            this.container.showHelp();
        }
    }

}