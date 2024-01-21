function invertBinaryTree(tree) {
  // WRITE YOUR BRILLIANT CODE HERE
  if(tree==null) return null;
  return new Node(tree.val, invertBinaryTree(tree.right), invertBinaryTree(tree.left));
}