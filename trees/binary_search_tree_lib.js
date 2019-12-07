import BinaryTree from binary_search_tree;

export default BinarySearchTree extends BinaryTree {

  insert( value ) {
    if (value < this.value) {
      this.left.insert(value);
    } else if (value > this.value) {
      this.right.insert(value);
    }    
  }
  
  function toString() {
    return this.left.toString() + ", " + this.value + ", " + this.right.toString();    
  }
  
  function toArray() {
    return [...this.left.toArray(), this.value, ...this.right.toArray()];
  }
  
  has( value ) {
    if (this.value typeof == 'undefined') {
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
