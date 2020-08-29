import {Director, ConcreteBuilder1, ConcreteBuilder2} from './builder'

class Client{
  public director: Director;

  constructor(director: Director){
    this.director = director;
  }

  run(){
    
    this.director.construct();
    let robot = this.director.getProduct();
    robot.log();
  }
}

let builder1 = new ConcreteBuilder1(1);
let director1 = new Director(builder1);

let builder2 = new ConcreteBuilder2(2);
let director2 = new Director(builder2);

let client1 = new Client(director1);
client1.run();

let client2 = new Client(director2);
client2.run();

// we can use the builder without a director if needed
let product1 = new ConcreteBuilder1(3)
  .buildPart1('part_1')
  .buildPart2('part_2')
  .buildPart3('part_3')
  .buildPart4('part_4')
  .getProduct();

product1.log();

let product2 = new ConcreteBuilder1(4)
  .buildPart1('part-1')
  .buildPart2('part-2')
  .getProduct();

product2.log();