/**
 * IMPLEMENTATIO OF THE SINGLETON PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 *
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */
export class Singleton {
    constructor() {
        this.id = 0;
        if (Singleton.INSTANCE) {
            throw new Error('Only one instance admited. Get the instance by using Singleton.current');
        }
    }
    setId(idValue) {
        this.id = idValue;
    }
    getId() {
        return this.id;
    }
    static get current() {
        if (Singleton.INSTANCE === null) {
            Singleton.INSTANCE = new Singleton();
        }
        return Singleton.INSTANCE;
    }
}
Singleton.INSTANCE = null;
