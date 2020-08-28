import {FactoryProducer} from './abstract_factory';

/**
 * So the programmer can use all the objects provided by the factory without
 * concerning about the implementatio (the logic of how the objects are created).
 * 
 * Another advantages is that if we add new object types we have to change only
 * the elements inside the pattern, this code will still work.
 */
class Client{
  main(): void{
    let product1Factory = FactoryProducer.getFactory('1');
    let product2Factory = FactoryProducer.getFactory('2');

    let productA1 = product1Factory.createProductA();
    let productB1 = product1Factory.createProductB();

    let productA2 = product2Factory.createProductA();
    let productB2 = product2Factory.createProductB();

    productA1.log();
    productB1.log();
    productA2.log();
    productB2.log();
  }
}

let client = new Client();
client.main();