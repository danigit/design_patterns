/**
 * IMPLEMENTATIO OF THE BRIDGE PATTERN AS EXPLAINED IN THE 
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 * 
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */

// this is the Implementor in the UML
export interface Color{
  getName()
}

// this is the Abstraction in the UML
abstract class Shape {
  color:Color;

  constructor(color: Color){
    this.color = color;
  }

  getShape(){
    return "The color is " + this.color.getName();
  }
}

// this is the concrete Implementor A in the UML
export class Red implements Color{
  getName(){
    return "red";
  }
}

// this is the concrete Implementor B in the UML
export class Green implements Color{
  getName(){
    return "The color is Green";
  }
}

// this is the redefined Abstraction in the UML
export class Circle extends Shape{
  constructor(color: Color){
    super(color)
  }
}