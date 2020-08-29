/**
 * IMPLEMENTATIO OF THE SINGLETON PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 *
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */
export class Singleton{
  private static INSTANCE: Singleton = null;
  private id: number = 0;

  private constructor(){
    if(Singleton.INSTANCE){
      throw new Error('Only one instance admited. Get the instance by using Singleton.current');
    }
  }

  public setId(idValue: number){
    this.id = idValue;
  }

  public getId(){
    return this.id;
  }

  public static get current(): Singleton{
    if(Singleton.INSTANCE === null){
      Singleton.INSTANCE = new Singleton();
    }

    return Singleton.INSTANCE;
  }
}