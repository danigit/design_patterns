/**
 * IMPLEMENTATION OF THE COMPOSITE PATTERN AS EXPLAINED IN THE 
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 * 
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */

abstract class ComponentObject{
  protected parent: ComponentObject;

  public setParent(parent: ComponentObject){
    this.parent = parent;
  }

  public getParent(){
    return this.parent;
  }

  public add(component: ComponentObject){ }

  public remove(component: ComponentObject){ }
  
  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

export class Leaf extends ComponentObject {
  public operation(): string{
    return 'Leaf operation';
  }
}

export class CompositeObject extends ComponentObject{
  protected childrens: ComponentObject[] = [];

  public add(component: ComponentObject): void{
    this.childrens.push(component);
    component.setParent(this);
  }

  public remove(component: ComponentObject): void{
    const componentIndex = this.childrens.indexOf(component);
    this.childrens.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean{
    return this.childrens.length !== 0;
  }

  public operation(): string{
    const operations = [];

    for(const child of this.childrens){
      operations.push(child.operation());
    }

    return `Branch( ${operations.join('+')})`;
  }
}