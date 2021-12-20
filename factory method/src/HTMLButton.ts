import { Button } from './Button';

export class HTMLButton implements Button {
    render(): void {
        console.log('HTML button render');
    }
    onClick(event: String): void {
        console.log(`HTML button ${event}`);
    }

}