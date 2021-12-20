export abstract class Shape {
    x: Number = 0;
    y: Number = 0;
    color: String = '';

    abstract clone(shape: Shape): Shape;
    constructor() {}
    
    cloneShape(shape: Shape): void {
        this.x = shape.x;
        this.y = shape.y;
        this.color = shape.color;
    }
}