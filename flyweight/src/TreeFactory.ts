import { Transform } from "stream";
import { TreeType } from './TreeType';

export class TreeFactory {
    private treeTypes: TreeType[] = [];

    getTreeType(name: string, color: string, texture: string): TreeType {
        let type = this.treeTypes.filter((tree) => tree.name === name && tree.color === color && tree.texture === texture)

        if (type.length === 0) {
            const newTreeType = new TreeType(name, color, texture)
            type.push(newTreeType);
            this.treeTypes.push(newTreeType);
        }

        return type[0];
    }
}