import BinaryTree from "binary_tree_lib";

export default class BinarySearchTree extends BinaryTree {

  insert( value ) {
    if (value < this.value) {
      this.left.insert(value);
    } else if (value > this.value) {
      this.right.insert(value);
    }    
  }
  
  toString() {
    return this.left.toString() + ", " + this.value + ", " + this.right.toString();    
  }
  
  toArray() {
    return [...this.left.toArray(), this.value, ...this.right.toArray()];
  }
  
  has( value ) {
    if (typeof this.value == 'undefined') {
      return false;
    }
    if (value == this.value) {
      return true; 
    }
    if (value < this.value) {
      return this.left.has(value);
    } else if (value > this.value) {
      return this.right.has(value);
    }    
  }
  
}
