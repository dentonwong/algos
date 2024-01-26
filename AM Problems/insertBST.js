function insertBst(bst, val) {
  // WRITE YOUR BRILLIANT CODE HERE
  
  if(!bst) return new Node(val);
  
  if(val < bst.val) bst.left = insertBst(bst.left, val);
  else if(val > bst.val) bst.right = insertBst(bst.right, val);
  
  return bst;
}