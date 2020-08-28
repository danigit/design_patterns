/**
 * IMPLEMENTATIO OF THE ABSTRACT FACTORY PATTERN AS EXPLAINED IN THE 
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 * 
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */

interface AbstractProductA{
  log(): void;
}

interface AbstractProductB{
  log(): void;
}

class ProductA1 implements AbstractProductA{
  log(){
    console.log('Product A1...');
  }
}

class ProductA2 implements AbstractProductA{
  log(){
    console.log('Product A2...');
  }
}

class ProductB1 implements AbstractProductB{
  log(){
    console.log('Product B1...');
  }
}

class ProductB2 implements AbstractProductB{
  log(){
    console.log('Product B2...');
  }
}

abstract class AbstractFactory{
  abstract createProductA(): AbstractProductA;
  abstract createProductB(): AbstractProductB;
}

class ConcreteFactroy1 extends AbstractFactory{
  createProductA(){
    return new ProductA1();
  }

  createProductB(){
    return new ProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory{
  createProductA(){
    return new ProductA2();
  }

  createProductB(){
    return new ProductB2();
  }
}

// this is not part of the pattern but is a good practice
export class FactoryProducer{
  static getFactory(factoryType: string): AbstractFactory{
    switch(factoryType.toLowerCase()){
      case '1':
        return new ConcreteFactroy1();
      case '2':
        return new ConcreteFactory2();
      default:
        return null;
    }
  }
}
