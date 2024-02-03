/*

Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

perm[i] is divisible by i.
i is divisible by perm[i].
Given an integer n, return the number of the beautiful arrangements that you can construct.

*/

function beautifulArrangement(n){

  const visited = new Set();

  function dfs(index){

    if(index == n + 1) return 1;
    let count = 0;
    for(let i = 1; i < n + 1; i++){

      if(!visited.has(i) && (i % index == 0 || index % i == 0)){

        visited.add(i);
        count += dfs(index + 1);
        visited.delete(i);

      }

    }
    return count;
  }

  return dfs(1);
}

//Test cases

console.log(beautifulArrangement(2))
// //Should be 2

// console.log(beautifulArrangement(1))
// // //Should be 1