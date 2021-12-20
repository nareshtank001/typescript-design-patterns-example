"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var CompoundGraphic_1 = require("./CompoundGraphic");
var Dot_1 = require("./Dot");
var compoundGraphic = new CompoundGraphic_1.CompoundGraphic();
var dot = new Dot_1.Dot(10, 20);
dot.move(12, 12);
//dot.draw();
compoundGraphic.add(dot);
var circle = new Circle_1.Circle(2, 3, 5);
circle.move(10, 10);
compoundGraphic.add(circle);
//compoundGraphic.remove(dot);
compoundGraphic.draw();