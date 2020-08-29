/**
 * IMPLEMENTATIO OF THE BUILDER PATTERN AS EXPLAINED IN THE 
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 * 
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */

interface Builder{
  buildPart1(part1Value: String);
  buildPart2(part2Value: String);
  buildPart3(part3Value: String);
  buildPart4(part4Value: String);
  getProduct(): Product;
}

export class ConcreteBuilder1 implements Builder{
  private product: Product;

  constructor(productId: number){
    this.product = new Product1();
    this.product.setId(productId);
  }

  public buildPart1(part1Value: String): ConcreteBuilder1{
    this.product.setPart1(part1Value);
    return this;
  }

  public buildPart2(part2Value: String): ConcreteBuilder1{
    this.product.setPart2(part2Value);
    return this;
  }

  public buildPart3(part3Value: String): ConcreteBuilder1{
    this.product.setPart3(part3Value);
    return this;
  }

  public buildPart4(part4Value: String): ConcreteBuilder1{
    this.product.setPart4(part4Value);
    return this;
  }

  public getProduct(): Product{
    return this.product;
  }
}

interface Product{
  setId(idValue: number);
  setPart1(part1Value: String);
  setPart2(part2Value: String);
  setPart3(part3Value: String);
  setPart4(part4Value: String);
  log();
}

class Product1 implements Product{
  private id;
  private part1;
  private part2;
  private part3;
  private part4;

  public setId(id: number){
    this.id = id;
  }

  public setPart1(part1Value: String){
    this.part1 = part1Value;
  }

  public setPart2(part2Value: String){
    this.part2 = part2Value;
  }

  public setPart3(part3Value: String){
      this.part3 = part3Value;
  }

  public setPart4(part4Value: String){
    this.part4 = part4Value;
  }

  log(){
    console.log('The product has id ' + this.id.toString() + ' with parts: ' + this.part1 + ', ' + this.part2 + ', ' + this.part3 + ', ' + this.part4);
  }
}

export class Director{

  private builder: Builder;

  constructor(builder: Builder){
    this.builder = builder;
  }

  public construct(){
    this.builder
      .buildPart1('part1')
      .buildPart2('part2')
      .buildPart3('part3')
      .buildPart4('part4')
  }

  public getProduct(){
    return this.builder.getProduct();
  }
}