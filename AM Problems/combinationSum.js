/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Key is to remember to continue the iteration at the current index and not any of the previous ones

*/


function combinationSum(candidates, target) {
  // WRITE YOUR BRILLIANT CODE HERE
  const res = [];
  
  function dfs(nums, index, remaining, path){
      if(remaining == 0) {
         
          return res.push([...path]);
      }
      
      for(let i = index; i < nums.length; i++){
          const num = nums[i];
          if(remaining - num < 0) break;
          path.push(num);
          dfs(nums, i, remaining - num, path)
          path.pop();
          
      }
      
  }
  candidates.sort();
  dfs(candidates, 0, target, []);
  return res;
}


//Test cases

// let candidates = [2,3,6,7], target = 7
// console.log(combinationSum(candidates, target))
// //Should be [[2,2,3],[7]]

// let candidates = [2,3,5], target = 8
// console.log(combinationSum(candidates, target))
// //Should be [[2,2,2,2],[2,3,3],[3,5]]

// let candidates = [2], target = 1
// console.log(combinationSum(candidates, target))
// //Should be []

// let candidates = [1], target = 1
// console.log(combinationSum(candidates, target))
// //Should be [[1]]

// let candidates = [1], target = 2
// console.log(combinationSum(candidates, target))
// //Should be [[1, 1]]

