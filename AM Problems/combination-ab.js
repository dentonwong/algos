/* 
Given a non-negative integer n, find all n-letter words composed by 'a' and 'b', return them in a list of strings in lexicographical order.
*/


function letterCombination(n) {
  // WRITE YOUR BRILLIANT CODE HERE
  const neighbors = ['a', 'b'];
  const res = [];
  
  function dfs(index, path){
      if(index == n) return res.push(path.join(''));
      
      for(let neighbor of neighbors){
          
          path.push(neighbor);
          dfs(index + 1, path);
          path.pop();
      } 
  }
  dfs(0, []);
  return res;
}

//Test cases

console.log(letterCombination(2))
//Should be ["aa", "ab", "ba", "bb"]

console.log(letterCombination(4))
//Should be ["aaaa", "aaab", "aaba", "aabb", "abaa", "abab", "abba", "abbb", "baaa", "baab", "baba", "babb", "bbaa", "bbab", "bbba", "bbbb"]
