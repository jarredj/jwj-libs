export default class BinaryTree {
  let value;
  let left = new BinaryTree();
  let right = new BinaryTree();
  
  constructor( nodeValue ) {
    this.value = nodeValue;
  }
  
  hasLeft() {
    return (this.leftVal typeof != 'undefined');
  }
  
  hasRight() {
    return (this.rightVal typeof != 'undefined');
  }
  
  get leftVal() {
    return this.left.value;
  }
  
  get rightVal() {
    return this.right.value;
  }

}
