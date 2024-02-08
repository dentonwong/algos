function validBst(root) {
    // WRITE YOUR BRILLIANT CODE HERE
    function dfs(node, min_val, max_val){
        
        if(!node) return true;
        
        if (!(min_val < node.val && node.val < max_val)) return false;
        
        return dfs(node.left, min_val, node.val) && dfs(node.right, node.val, max_val);        
        
    }
    
    
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}


function validBST(tree){

    function dfs(node, min, max){
        if(!node) return true;

        if(node.val < min && node.val > max) return false;


        return dfs(node.left, min ,node.val) && dfs(node.right, node.val, max)
    }


    
}

