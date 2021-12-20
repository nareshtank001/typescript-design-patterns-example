import { Button } from "../Button";

export class LinuxButton implements Button {
    paint(): void {
        console.log('linux button paint');
    }
    
}