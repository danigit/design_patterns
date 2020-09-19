import { Leaf, CompositeObject } from "./composite";

class Client{

  run(){

    // simple Leaf component
    const leaf = new Leaf();
    console.log(leaf.operation());

    // complex composite component
    const tree = new CompositeObject();
    const left = new CompositeObject();
    leaf.add(new Leaf());
    left.add(new Leaf());
    const right = new CompositeObject();
    right.add(new Leaf());
    tree.add(left);
    tree.add(right);

    console.log(tree.operation());
    
    const tree1 = new CompositeObject();
    tree1.add(left);

    tree.add(tree1);
    console.log(tree.operation());
  }
}

new Client().run();