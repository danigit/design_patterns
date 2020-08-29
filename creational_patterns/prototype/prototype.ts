/**
 * IMPLEMENTATIO OF THE PROTOTYPE PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 *
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */

interface Prototype{
  setId(idValue: number);
  getId();
  setName(nameValue: String);
  getName();
  clone();
}

export class ConcretePrototype1 implements Prototype{
  private id: number;
  private name: String;

  constructor(idValue: number, nameValue: String){
    this.id = idValue;
    this.name = nameValue;
  }

  setId(idValue: number) {
    this.id = idValue;
  }
  getId() {
    return this.id;
  }
  setName(nameValue: String) {
    this.name = nameValue;
  }
  getName() {
    return this.name;
  }

  clone(){
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
log(){
    console.log('Object id: ' + this.id.toString() + ', name: ' + this.name);
  }
}

export class ConcretePrototype2 implements Prototype{
  private id: number;
  private name: String;

  constructor(idValue: number, nameValue: String){
    this.id = idValue;
    this.name = nameValue;
  }

  setId(idValue: number) {
    this.id = idValue;
  }
  getId() {
    return this.id;
  }
  setName(nameValue: String) {
    this.name = nameValue;
  }
  getName() {
    return this.name;
  }

  clone(){
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  log(){
    console.log('Object id: ' + this.id.toString() + ', name: ' + this.name);
  }
}

// this is not in the pattern but is god practice to use it
export class PrototypeFactory {

  getClone(prototype: Prototype){
    return prototype.clone();
  }
}