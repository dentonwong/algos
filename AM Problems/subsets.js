/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

*/


function subsets(nums) {
  // WRITE YOUR BRILLIANT CODE HERE
  const res = [];
  function dfs(index, path){
      res.push([...path]);
      for(let i = index; i < nums.length; i++){

          path.push(nums[i]);
          dfs(i + 1, path);
          path.pop();
          
      }
      
  }
  dfs(0, []);
  return res;
}

//Test cases

let nums = [1,2,3]
console.log(subsets(nums))
//Should be 
/*
1
1 2
1 2 3
1 3
2
2 3
3
*/