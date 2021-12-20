/* import { TreeFactory } from "./TreeFactory";
import { Tree } from './Tree';

const treeFactory = new TreeFactory();
const treeType = treeFactory.getTreeType('Neem', 'green', 'bark');
const tree = new Tree(10,10,treeType);
tree.draw('mountain');

const treeType2 = treeFactory.getTreeType('Babool', 'green', 'bark');
const tree2 = new Tree(33,33,treeType2);
tree2.draw('ground'); */

//optional forest class
import { Forest } from "./Forest";
const forest = new Forest();
forest.planTree(10,10,'neem','green', 'bark');
forest.planTree(20,20,'neem','green', 'bark');
forest.planTree(33,33,'babool','yellow', 'wood');
forest.draw('mountain');