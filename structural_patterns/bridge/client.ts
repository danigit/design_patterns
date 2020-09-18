import { Circle, Red } from "./bridge";

class Client{

  run(){

    const circle = new Circle(new Red());

    console.log(circle.getShape());
  }
}

new Client().run();