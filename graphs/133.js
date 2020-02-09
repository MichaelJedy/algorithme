// Definition for a Node.
function Node(val, neighbors) {
     this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
 };


/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let visited = new Map();

    if( node == null ){
        return node;
    }

    let fifo = [];
    fifo.unshift( node );
    visited.set( node, new Node( node.val, [] ) ) ;

    while( fifo.length != 0 ){
        let currentNode = fifo.pop();
        
            currentNode.neighbors.forEach( function( voisinNode ) {
                if( !visited.has( voisinNode ) ){
                   visited.set( voisinNode, new Node( voisinNode.val, [] ) ) ;   
                   fifo.unshift( voisinNode ) ; 
                }
                visited.get( currentNode ).neighbors.push( visited.get( voisinNode ) ) ;
                     
            } );
    }  

    return visited.get( node ) ;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.neighbors.push(b);
a.neighbors.push(d);
b.neighbors.push(a);
b.neighbors.push(c);
c.neighbors.push(b);
c.neighbors.push(d);
d.neighbors.push(a);
d.neighbors.push(c) ;


let cloned = cloneGraph(a);
console.log( cloned.neighbors[1].neighbors[1] ) ;
