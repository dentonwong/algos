/*

Given a string of unique letters, find all of its distinct permutations.

Permutation means arranging things with an order. For example, permutations of [1, 2] are [1, 2] and [2, 1]. Permutations are best visualized with trees.

Input
letters: a string of unique letters
Output
all of its distinct permutations

*/



function permutations(letters) {
  // WRITE YOUR BRILLIANT CODE HERE
  const res = [];
  function dfs(index, path, used){
      if(index == letters.length) return res.push(path.join(''));
      
      for(let char of letters){
          if(!used.has(char)){
              used.add(char);
              path.push(char);
              dfs(index + 1, path, used);
              path.pop();
              used.delete(char);
          }
          
      }
      
  }
  const used = new Set();
  dfs(0, [], used);
  return res;
}



//Test cases

console.log(permutations('abc'))
//Should be  abc acb bac bca cab cba
