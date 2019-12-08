export default class BinaryTree {
  value = undefined;
  left = new BinaryTree();
  right = new BinaryTree();
  
  constructor( nodeValue ) {
    this.value = nodeValue;
  }

  get leftVal() {
    return this.left.value;
  }
  
  get rightVal() {
    return this.right.value;
  }

  hasLeft() {
    return (typeof this.left.value != 'undefined');
  }
  
  hasRight() {
    return (typeof this.right.value != 'undefined');
  }
  


}
