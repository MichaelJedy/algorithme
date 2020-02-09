function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right=null;
}


function createTree(){
    let root = new TreeNode(1);
   // root.left = new TreeNode(2);
   // root.right = new TreeNode(3);
  //  left = root.left;
  //  left.right = new TreeNode(4);
    return root;
}

function getDeep(root,num){
    if(root == null){
        return 0;
    }
    if( root.right == null && root.left == null ){
        return num;
    }
    else if(root.right != null && root.left != null ){
        return Math.max( getDeep(root.left, num+1), getDeep(root.right, num+1) ) ;
    }
    else if( root.right != null ){
        return getDeep( root.right, num+1 ) ;
    }else if( root.left != null ){
        return getDeep( root.left, num+1 ) ;
    }
}


function recursive(root, matrix, level, deep, left, beginSegment, endSegment){
    let currentSegment =  matrix[level];
    if( root == null ){
        return ;
    }
    if( level == deep){
        if( left ){
            currentSegment[beginSegment] = '' + root.val;
        }else{
            currentSegment[endSegment] = '' + root.val;
        }
        return;
    }else{
        let middle = Math.floor( ( ( endSegment - beginSegment) / 2 ) ) + beginSegment;
        let segmentLeft = currentSegment.slice(0, middle);
        let segmentRight = currentSegment.slice(middle+1, currentSegment.length ) ;
        currentSegment = segmentLeft.concat( [ '' + root.val + '' ] ).concat( segmentRight ) ;
        matrix[level] = currentSegment;
        recursive( root.left, matrix, level+1, deep, true, beginSegment, middle-1);
        recursive( root.right, matrix, level+1, deep, false, middle+1, endSegment);
        return;
    }
}


function mathSymbol(lowerBound, upperBound, iterator){
    let accumulator =0;
    for(let i=0; i <= upperBound ; i++ ){
        accumulator = accumulator + iterator(i) ;
    }
    return accumulator;
}

function multiplyEachBy2(a){
    return Math.pow(2,a);
}

function createMatrix(n,m){
    let result=[];
    for(let i = 0; i < n ; i++){
        let line = [];
        for( let j = 0; j < m; j++ ){
            line[j] = "";
        }
        result.push(line);
    }
    return result;
}




var printTree = function(root) {
    let deep = getDeep( root, 0) ;
    let nbColonnes = mathSymbol(0,deep, multiplyEachBy2 );
    let matrix = createMatrix(deep+1,nbColonnes) ;
    
    recursive(root, matrix, 0, deep, false, 0, matrix[0].length-1);
    return matrix;
};

let root = createTree();
console.log( printTree(root) );