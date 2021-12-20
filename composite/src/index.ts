import { Circle } from "./Circle";
import { CompoundGraphic } from "./CompoundGraphic";
import { Dot } from "./Dot";

const compoundGraphic = new CompoundGraphic();

const dot = new Dot(10, 20);
dot.move(12, 12);
//dot.draw();
compoundGraphic.add(dot);

const circle = new Circle(2, 3, 5);
circle.move(10, 10);

compoundGraphic.add(circle);

//compoundGraphic.remove(dot);

compoundGraphic.draw();