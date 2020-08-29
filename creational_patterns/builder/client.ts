import {Director, ConcreteBuilder1} from './builder'

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

let builder = new ConcreteBuilder1(1);
let director = new Director(builder);

let client = new Client(director);
client.run();

// we can use the builder without a director if needed
let product = new ConcreteBuilder1(2)
  .buildPart1('part_1')
  .buildPart2('part_2')
  .buildPart3('part_3')
  .buildPart4('part_4')
  .getProduct();

product.log();