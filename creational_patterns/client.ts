import {FactoryProducer} from './abstract_factory';

/**
 * So the programmer can use all the objects provided by the factory without
 * concerning about the implementatio (the logic of how the objects are created).
 * 
 * Another advantages is that if we add new object types we have to change only
 * the elements inside the pattern, this code will still work.
 */
class Client{
  productA;
  productB;

  constructor(productFactory){
    this.productA = productFactory.createProductA();
    this.productB = productFactory.createProductB();
  }

  run(){
    this.productA.log();
    this.productB.log();
  }
}

let procuct1Factory = FactoryProducer.getFactory('1');
let procuct2Factory = FactoryProducer.getFactory('2');

new Client(procuct1Factory).run();
new Client(procuct2Factory).run();