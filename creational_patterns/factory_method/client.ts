import {ProductType, ConcreteCreator} from './factory_method'


class Client{

  productFactory;

  run(){
    this.productFactory = new ConcreteCreator();
    let product1 = this.productFactory.factoryMethod(ProductType.PRODUCT1);
    product1.setId(1);
    product1.setName('product1');
    product1.log();

    let product2 = this.productFactory.factoryMethod(ProductType.PRODUCT2);
    product2.setId(2);
    product2.setName('product2');
    product2.log();
  }
}

let client = new Client();
client.run();