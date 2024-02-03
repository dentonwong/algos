/*

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

*/


// function subsets(nums) {
//   // WRITE YOUR BRILLIANT CODE HERE
//   const res = [];
//   nums.sort();
//   function dfs(index, path){
//       res.push([...path]);
//       for(let i = index; i < nums.length; i++){
//         if( i > index && nums[i] == nums[i - 1]) continue;
//           path.push(nums[i]);
//           dfs(i + 1, path);
//           path.pop();
          
//       }
      
//   }
//   dfs(0, []);
//   return res;
// }


//Test cases

// let nums = [1,2,2]
// console.log(subsets(nums))
// //Should be 
/*
[[],[1],[1,2],[1,2,2],[2],[2,2]]
*/

let nums = [0]
console.log(subsets(nums))
// // //Should be 
// // /*
// // [[],[0]]
// // */

