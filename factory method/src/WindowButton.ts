import { Button } from "./Button";

export class WindowButton implements Button {
    render(): void {
        console.log('window button render');
    }
    onClick(event: String): void {
        console.log(`window button ${event}`);
    }

}