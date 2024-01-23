class Node {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function isBalanced(tree) {
  // WRITE YOUR BRILLIANT CODE HERE
  
 
  
  function dfs(node){

  if(node == null) return 0;

  let left = dfs(node.left);
  let right = dfs(node.right);

  if(left == -1 || right == -1) return -1;
  if(Math.abs(right - left) > 1) return -1;
  return Math.max(right, left) + 1
}
return dfs(tree) != -1;
}