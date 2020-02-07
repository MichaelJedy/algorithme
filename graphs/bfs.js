class Graph{

    constructor(noOfVertex){
        this.noOfVertex = noOfVertex;
        this.listNodes = new Map();
    }

    addVertex(n){
        this.listNodes.set( n, [] ) ;
    }

    addEdge(v,w){
        this.listNodes.get( v ).push(w) ;
        this.listNodes.get(w).push(v) ;
    }

    getVoisins( v ){
        return this.listNodes.get(v) ;
    }

    print(){
        for( let vertice of this.listNodes.keys() ){
            let concat = "";
            for( let voisin of this.listNodes.get( vertice ) ){
                concat = concat + " " + voisin;
            }
            console.log( vertice + "->" + concat ) ;
        }
    }
}


function bfs(graph, sommet){
    let fifo = [];
    fifo.unshift( sommet ) ;

    let set = new Set();
    set.add( sommet ) ;

    while( fifo.length > 0 ){
        let s = fifo.pop() ;
        console.log( s ) ;
        voisins.forEach( function(v){
            if( !set.has(v) ){
                fifo.unshift(v) ;
                set.add(v) ;    
            }
        });        
    }
    return set;
}


let g = new Graph(6);
g.addVertex("A") ;
g.addVertex("B") ;
g.addVertex("C") ;
g.addVertex("D") ;
g.addVertex("E") ;
g.addVertex("F");

g.addEdge("A","B") ;
g.addEdge("B","C") ;
g.addEdge("A","D") ;
g.addEdge("A","E") ;
g.addEdge("C","E") ;
g.addEdge("C","F") ;
g.addEdge("E","F") ;
g.addEdge("E", "D") ;


// let voisins = g.getVoisins("A") ;
// console.log( voisins ) ;

g.print();

let set = bfs( g, "A" ) ;
//console.log( set ) ;


/*let fifo = [];
fifo.unshift("a");
fifo.unshift("b");
fifo.unshift("c");
fifo.unshift("d"); */

//let remove = fifo.shift();



//console.log( "remove : " + remove ) ;

