import { Tree } from './Tree';
import { TreeFactory } from './TreeFactory';
export class Forest {
    private trees: Tree[] = [];
    private treeFactory = new TreeFactory();

    planTree(x: number, y: number, name: string, color: string, texture: string) {
        const type = this.treeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    draw(canvas: string): void {
        this.trees.forEach((tree)=>{
            tree.draw(canvas);
        })
    }
}