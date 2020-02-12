function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
};


// 3,9,20,null,null,15,7]
function getTree(){
    let node = new TreeNode(3) ;
    node.left = new TreeNode(9);
    node.right = new TreeNode(20) ;

    node = node.right;
    node.left = new TreeNode(15) ;
    node.right = new TreeNode(7) ;
}

