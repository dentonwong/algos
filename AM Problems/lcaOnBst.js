function lcaOnBst(bst, p, q) {
  // WRITE YOUR BRILLIANT CODE HERE
  if(bst.val < p && bst.val < q) return lcaOnBst(bst.right, p, q);
  else if (bst.val > p && bst.val > q) return lcaOnBst(bst.left, p, q);
  
  return bst.val;
}

// alternative:
// function lca(root, node1, node2) {
//   // WRITE YOUR BRILLIANT CODE HERE
//   if(!root) return null;
//   if(root == node1 || root == node2) return root;
  
//   let left = lca(root.left, node1, node2);
//   let right = lca(root.right, node1, node2);
//   if(left && right) return root;
  
//   if(left) return left;
//   if(right) return right;
  
  
// }