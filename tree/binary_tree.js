function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right=null;
}

function printTree(root){
    if( root == null ){
        return;
    }
    console.log( root.val );
    printTree( root.left);
    printTree(root.right);
}

function createTree(){
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

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
        return getDeep( root.right, num++ ) ;
    }else if( root.left != null ){
        return getDeep( root.left, num++ ) ;
    }
}

let root = createTree();
// printTree(root);

console.log( getDeep( root, 0) ) ;