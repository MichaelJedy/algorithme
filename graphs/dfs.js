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


function dfs( graphe, node ){
    let stack = [] ;
    let visited = new Set();

    visited.add(node);
    stack.push(node);
    while( stack.length > 0 ){
        let t = stack.pop();
        console.log( t );

        let notVisited = graphe.getVoisins(t).filter( function(n){
            return !visited.has(n);
        }) ;

        notVisited.forEach( function( newNode ) {
            visited.add( newNode ) ;
            stack.push( newNode )
        } ) ;

    }

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

//g.print();

dfs( g, "A" );
