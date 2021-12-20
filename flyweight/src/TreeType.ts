export class TreeType {
    constructor(public name: string, public color: string, public texture: string){
        console.log(`creat tree ${name} ${color} ${texture}`);
    }

    draw(canvas: string, x: number, y: number): void {
        console.log(`drawing tree  ${JSON.stringify(this)} on ${canvas} at ${x} X ${y} `);
    }
}