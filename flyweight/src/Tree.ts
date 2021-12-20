import { TreeType } from './TreeType';
export class Tree {
    constructor(private x: number, private y: number, private type: TreeType) { }

    draw(canvas: string):void {
        this.type.draw(canvas, this.x, this.y);
    }
}