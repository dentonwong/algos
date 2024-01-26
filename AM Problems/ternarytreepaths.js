function ternaryTreePaths(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  const res = [];
  function dfs(node, path){
      if(node.children.length == 0){
          return res.push(path.join('->'));    
      }
      
      for(let child of node.children){
          path.push(child.val);
          dfs(child, path);
          path.pop();
          
      }
  }
  
  dfs(root, [root.val]);
  return res;
}