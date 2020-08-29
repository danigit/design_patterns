import {ConcretePrototype1, ConcretePrototype2, PrototypeFactory} from "./prototype";

class Client{

  prototypeFactory;

  run(){
    this.prototypeFactory = new PrototypeFactory();

    let prototype1 = new ConcretePrototype1(1, 'proto1');
    let prototypeCopy1 = this.prototypeFactory.getClone(prototype1);

    let prototype2 = new ConcretePrototype2(2, 'proto2');
    let prototypeCopy2 = this.prototypeFactory.getClone(prototype2);

    prototype1.log();
    prototype2.log();

    prototypeCopy1.log();
    prototypeCopy2.log();

    prototypeCopy1.setName('protoCopy1');
    prototypeCopy2.setName('protoCopy2')

    prototype1.log();
    prototype2.log();
    
    prototypeCopy1.log();
    prototypeCopy2.log();
  }
}

let client = new Client();
client.run();