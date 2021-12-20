import { Graphic } from './Graphic';
export class CompoundGraphic implements Graphic {
    private children: Graphic[] = [];
    
    add(child: Graphic): void {
        this.children.push(child);
    }

    remove(child: Graphic): void {
        this.children.forEach((item, index) => {
            if (item === child) this.children.splice(index, 1);
        });
    }

    move(x: number, y: number): void {
        this.children.forEach((item) => {
            item.move(x, y);
        });
    }

    draw(): void {
        this.children.forEach((item) => {
            item.draw();
        });
    }

}