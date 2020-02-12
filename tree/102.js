function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result =[];
    let fifo = [];
    let subResult=[];

    if( root == null ){
        return result;
    }  
    fifo.unshift( root ) ;

    while( fifo.length > 0 ){
        let level_size = fifo.length;
        for( let i = 0 ; i < level_size ; i++ ){
            let node = fifo.pop(); 
            subResult.push( node.val ) ;
            if( node.left != null ){
                fifo.unshift( node.left ) ;
            }
            if( node.right != null ){
                fifo.unshift( node.right ) ; 
            }
        }
        result.push( subResult ) ;
        subResult = [];
    }

    return result;
};


// 3,9,20,null,null,15,7]
function getTree(){
    let root = new TreeNode(1) ;
    root.left = new TreeNode(2);
    let node = root.left;
    node.left = new TreeNode(3);
    node = node.left;
    node.left = new TreeNode(4);
    node = node.left;
    node.left = new TreeNode(5);
    return root;
}

let root = getTree();
console.log( levelOrder(root) ) ;
