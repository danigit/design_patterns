# Design Pattern TypeScript Implementation

---

### Table of Contents

- [Creational Patterns](#creational-patterns)
  - [Abstract Factory](#abstract-factory)
  - [Builder](#builder)
---

## Creational Patterns
> Creational design patterns abstract the instantiation process. They help make a system
independent of how its objects are created, composed, and represented. A class creational
pattern uses inheritance to vary the class that's instantiated, whereas an object
creational pattern will delegate instantiation to another object. 

#### Abstract Factory
> Provide an interface for creating famili es of related or dependent objects without
specifying their concrete classes. 

##### Applicability:
- when a system should be independent o f how its products are created, composed,
and represented.
- when a system should be configured with one o fmultiple famili es of products
- when a family of related product objects is designed to be used together, and you
need to enforce th is constraint
- whenyou want to provide a class library of products, and you want to reve al just
their interface, not their implementations

##### Structure
![Project Image](./creational_patterns/img/abstract_factory.png)

##### Partecipants
- AbstractFactory
  - declares an interface for operations that create abstract product objects
- ConcreteFactory
  - implements the operations to create concrete product objects
- AbstractProduct
  - declares an interface for a type of product object
- ConcreteProduct
  - defines a product object to becreated by the corresponding concrete factory
  - implements the AbstractProduct interface                                               
- Client
  - uses only interfaces declared by AbstractFactory and AbstractProduct
classes

##### Usage

Run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!.

### Builder
>Separate the construction of a complex object from its representation so that the
same construction process can create different representations

##### Applicability
- use when the algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled
- use when the construction process must allow different representations for the object that's constructed

##### Structure

![Project Image](./creational_patterns/img/builder.png)

##### Participants

- Builder
  - specifies an abstract interface for creating parts of a Product object
- ConcreteBuilder
  - constructs and assembles parts of the product by implementing the Builder
interface
  - defines and keeps track of the representation it creates
  - provides an interface for retrieving the product
- Director
  - constructs an object using the Builder interface
- Product
  - represents the complex object under construction. ConcreteBuilder builds the product's internal representation and defines the process by which it's assembled
  - includes classes that define the constituent parts, including interfaces for assembling the parts into the final result

##### Usage

Run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!.




---

## References

<pre><p>All the above informations are cited from the book <br><b style="color: red;">Design Patterns: Elements of Reusable Object-Oriented Software</b>.</p></pre>
---

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

