import { Singleton } from "./singleton";

class Client{

  prototypeFactory;

  run(){

    let singleton1 = Singleton.current;
    console.log('Singleton1 id: ', singleton1.getId());

    let singleton2 = Singleton.current;
    singleton2.setId(1);
    console.log('Singleton1 id: ', singleton1.getId());
  }
}

let client = new Client();
client.run();