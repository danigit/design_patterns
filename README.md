# Design Patterns TypeScript Implementation

---

### Table of Contents

- [Creational Patterns](#creational-patterns)
  - [Abstract Factory](#abstract-factory)
  - [Builder](#builder)
  - [Factory Method](#factory-method)
  - [Prototype](#prototype)
  - [Singleton](#singleton)
- [Structural Patterns](#structural-patterns)
  - [Adapter](#adapter)
  - [Bridge](#bridge)
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

Open a terminal in the abstract_factory folder and run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!.

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

Open a terminal in the builder folder and run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!

### Factory Method
>Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses

##### Applicability
- when a class can't anticipate the class of objects it must create
- when a class wants its subclasses to specify the objects it creates
- when classes delegate responsibility to one of several helper subclasses, and you want to localize the knowledge of which helper subclass is the delegate

##### Structure

![Project Image](./creational_patterns/img/factory_method.png)

##### Participants

- Product
  - defines the interface of objects the factory method creates
- ConcreteProduct
  - implements theProduct interface
- Creator
  - declares the factory method, which returns an object of type Product. Creator may also define a default implementation of the factory method that returns a default ConcreteProduct object
  - may call the factory method to create a Product object
- ConcreteCreator
  - overrides the factory method to return an instance of a Concrete Product

##### Usage

Open a terminal in the factory_method folder and run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!

#### Prototype
> Specify the kinds of objects to crea te using a prototypical instance, and create new objects by copying this prototype

##### Applicability:
- when the classes to instantiate are specified at run-time, for example, by dynamic loading
- to avoid building a class hierarchy of factories that parallels the class hierarchy of products
- when instances of a class can have one of only a few different combinations of state. It may be more convenient to install a corresponding number of prototypes and clone them rather than instantiating the class manually, each time with the appropriate state

##### Structure
![Project Image](./creational_patterns/img/prototype.png)

##### Partecipants
- Prototype
  - declares an interface for cloning itself
- ConcretePrototype
  - implements a noperati on for cloning itself
- Client
  - creates a new object by asking a prototype to clone itself

##### Usage

Open a terminal in the prototype folder and run the following command to install the required dependencies `npm install @types/node`. Run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!

#### Singleton
> Ensure a class only has one instance, and provide a global point of access to it

##### Applicability:
- when there must be exactly one instance of a class, and it must be accessible to clients from a well-known access point
- when the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code

##### Structure
![Project Image](./creational_patterns/img/singleton.png)

##### Partecipants
- Singleton
  - defines an Instance operation that lets clients access its unique instance. Instance is a class operation
  - may be responsible for creating its own unique instance

##### Usage

Open a terminal in the singleton folder and run the following command to install the required dependencies `npm install esm`. Run the client file using the command `tsc -t es6 client.ts` and then run the created javascript file using the command `node -r esm client.js`. TypeScript and Node are required!

## Structural Patterns
> Structural patterns are concerned with how classes and objects are composed to form larger structures. Structural class patterns use inheritance to compose interfaces or implementations. This pattern is particularly useful for making independently developed class libraries work together. In general, an adapter makes one interface (the adaptee's conform to another, thereby providing a uniform abstraction of different interface s.A class adapter accomplishes this by inheriting privately from an adaptee class. The adapter then expresses its interface in terms of the adaptee's.

#### Adapter
> Convert the interfac e of a class into another interface clients expect Adapter lets classes work together that couldn' t otherwise because of incompatible interfaces. Also known as **Wrapper**.

##### Applicability:
- when you want to use an existing class, and its interface does not match the one you need
- when you want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don't necessarily have compatible interfaces
- (object adapter only) when you need to use several existing subclasses, but it's unpractical to adapt their interfa ce by subclassing every one. An obje ct adapter can adapt the interface of its parent class

##### Structure
![Project Image](./structural_patterns/img/adapter.png)

**Object Adapter Structure**

![Project Image](./structural_patterns/img/object_adapter.png)

##### Partecipants
- Targhet
  - defines the domain-specific interface that Client uses
- Client
  - collaborates with objects conforming to the Target interface
- Adaptee
  - defines a enxisting interface that needs adapting
- Adapter
  - adapts the interface of Adaptee to the Target interface

##### Usage

Open a terminal in the adapter folder and run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!

#### Bridge
> Decouple an abstraction from its implementation so that the two can vary independently

##### Applicability:
- you want to avoid a permanent binding between an abstraction and its implementation. This might be the case, for example, when the implementation must be selected or switched at run-time
- when both the abstractions and their implementations should be extensible by subclassing. In this case, the Bridge pattern lets you combine the different abstractions and implementations and extend them independently
- when changes in the implementation of an abstraction should have no impact on clients; that is, their code should not have to be recompiled
- (C++) when you want to hide the implementation of an abstraction completely from clients. In C++ the representation of a class is visible in the class interface
- when you have a proliferation of classes. Such a class hierarchy indicates the need for splitting an object into two parts. Rumbaugh uses the term "nest ed generalizations" to refer to such class hierarchies
- when you want to share an implementation among multiple objects (perhaps using reference counting), and this fact should be hidden from the client.

##### Structure
![Project Image](./structural_patterns/img/bridge.png)

##### Partecipants
- Abstraction
  - defines the abstraction's interface
  - maintains a reference to an object of type Implementor
- RefinedAbstraction
  - Extends the interface defined by Abstraction
- Implementor
  - defines the interface for implementation classes. This interface doesn't have to correspond exactly to Abstraction's interface; in fact the two interfaces can be quite different. Typically the Implementor interface provides only primitive operations, and Abstraction defines higher-level operations based on these primitives
- ConcreteImplementor
  - implements the Implementor interface and define its concrete implementation

##### Usage

Open a terminal in the bridge folder and run the client file using the command `tsc client.ts` and then run the created javascript file using the command `node client.js`. TypeScript and Node are required!
---

## References

<pre><p>All the above informations are cited from the book <br><b style="color: red;">Design Patterns: Elements of Reusable Object-Oriented Software</b>.</p></pre>
---
