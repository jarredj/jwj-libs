class Node {
  let value;
  const children: [];
  
  constructor( initialVal ) {
    this.value = initialVal;
  }
  
  function toString() {
    return value;
  }
  
  newChild( childVal ) {
    this.children.push( new Node(childVal) );
  }
  
  addChild( node ) {
    this.children.push(node);
  }
  
  getChild( childVal ) {
    let [child] = this.children.filter( (node) => node.value == childVal );
    return child;
  }
  
  setChild( oldChildVal, newChildVal ) {
    this.getChild(oldChildVal).value = newChildVal;
  }
  
  removeChild( node ) {
    this.children = this.children.filter( (nodeElm) => nodeElm !== node );
  }
}

export default class Tree {
  let parentNode = new Node();
  
  constructor( initialNodeVal ) {
    this.parentNode = new Node(initialNodeVal);
  }
  
  function addValue( nodeValue ) {
    this.parentNode.newChild(nodeVal);
  }
  
  function addNode( node ) {
    this.parentNode.addChild(node);
  }



}
