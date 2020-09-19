/**
 * IMPLEMENTATION OF THE FACTORY METHOD PATTERN AS EXPLAINED IN THE 
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 * 
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */

interface Product{
  getId();
  getName();

  setId(idValue: number);
  setName(nameValue: String);

  log();
}

class ConcreteProduct1 implements Product{

  private id;
  private name;

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  setId(idValue: number){
    this.id = idValue;
  }

  setName(nameValue: String){
    this.name = nameValue;
  }

  log(){
    console.log('ConcreteProduct1 id: ' + this.id.toString() + ', product name: ' + this.name);
  }
}

class ConcreteProduct2 implements Product{
  private id: number;
  private name: String;

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  setId(idValue: number) {
    this.id = idValue;
  }
  setName(nameValue: String) {
    this.name = nameValue;
  }

  log(){
    console.log('ConcreteProduct2 id: ' + this.id.toString() + ', product name: ' + this.name);
  }
}

export enum ProductType{
  PRODUCT1 = 1,
  PRODUCT2
}

interface Creator{
  factoryMethod(productType: ProductType);
}

export class ConcreteCreator implements Creator{

  factoryMethod(productType: ProductType){

    switch(productType){
      case ProductType.PRODUCT1:
        return new ConcreteProduct1();
      case ProductType.PRODUCT2:
        return new ConcreteProduct2();
      default:
        return null;
    }
  }
}