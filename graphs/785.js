/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {

    let stack = [];
    let colored = new Array(graph.length).fill(  parseInt( "-1" ) );

    let result=true;

    graph.forEach( function( edge, indice ){

        if( colored[indice] == -1 ){
            stack.push( indice ) ;
            colored[indice] = 0;

        while( stack.length != 0 ){

            let node = stack.pop();

            edge.forEach( function( value ) {

                    if( colored[value] == -1 ){
                        stack.push( value ) ;
                        if( colored[node] == 0){
                            colored[value] = 1;
                        }else{
                            colored[value] = 0;
                        }
                    }else if( colored[value] == colored[node] ){
                        result = false;
                        return false;
                    }

            })
        }
    }
    });

    return result;
}


let number = [[1,3],[0,2],[1,3],[0,2]] ;

console.log( isBipartite( number ) ) ;