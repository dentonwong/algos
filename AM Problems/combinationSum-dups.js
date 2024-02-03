/* Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/


// function combinationSum(candidates, target) {
//   // WRITE YOUR BRILLIANT CODE HERE
//   const res = [];
  
//   function dfs(nums, index, remaining, path){
//     if(remaining == 0) return res.push([...path])
//     for(let i = index; i < nums.length; i++){

//       if(remaining - nums[i] < 0) break;
//       else if (i != index && nums[i] == nums[i - 1]) continue;

//       path.push(nums[i]);
//       dfs(nums, i + 1, remaining - nums[i], path)
//       path.pop();
//     }
      
//   }
//   candidates.sort((a, b) => a - b);
//   dfs(candidates, 0, target, []);
//   return res;
// }

function combinationSum(candidates, target){

  const res = [];
  function dfs(nums, startIndex, remaining, path){
    if(remaining == 0) return res.push([...path]);

    for(let i = startIndex; i < nums.length; i++){

      if(remaining - nums[i] < 0 ) break;
      if(i > startIndex && nums[i] == nums[i - 1]) continue;

      path.push(nums[i])
      dfs(nums, i + 1, remaining - nums[i], path)
      path.pop()

    }
    


  }
  candidates.sort((a, b)=> a - b)
  dfs(candidates, 0, target, [])
  return res;

}


//Test cases

let candidates = [10,1,2,7,6,1,5], target = 8
console.log(combinationSum(candidates, target))
// //Should be [ [1,1,6], [1,2,5], [1,7], [2,6] ]

// let candidates = [2,5,2,1,2], target = 5
// console.log(combinationSum(candidates, target))
// //Should be [ [1,2,2], [5] ]

