/*

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

*/

// function permutationDups(nums){

//   const res = [];
//   const visitedIndex = new Set();
//   nums.sort();
//   function dfs(index, path){
//     console.log("DFS called with index:", index, "and path:", path);
//     if(index == nums.length){
//       console.log("Reached end of permutation, current path:", path);
//       return res.push([...path]);
//     } 

//     for(let i = 0; i < nums.length; i++){

//       if (visitedIndex.has(i) || (i > 0 && nums[i] == nums[i - 1])) continue;
      
//         visitedIndex.add(i);
//         path.push(nums[i]);
//         dfs(index + 1, path)
//         path.pop();
//         visitedIndex.delete(i);

      


//     }



//   }

//   dfs(0, []);
//   return res;
// }


function permutationDups(nums){
  const res = [];
  const visited = new Set();
  //use dfs
  //start with init and declaring a result array
  //initi/declare a set to hold the index (so only unique indexes as values)
  //dfs will take two parameters startIndex and path array
    //leaf endpoint will be when the index is of nums length
    //use a for loop starting at 0 all the way to the end of nums
      //check if the current index had been reached in the current permutation, skip if so
      //check if the current i in the loop is greater than 0 and the current value at i is equivalent to value at i-1
        //and if we had either not done or already did the other equivalent value
          //if so skip
      //otherwise, add the index to the set
      //add to path
      //dive deeper into the dfs recursive call passing in index + 1
      //pop from path
  //return the result array at the end

  function dfs(startIndex, path){
    if(startIndex == nums.length) return res.push([...path]);

    for(let i = 0; i < nums.length; i++){
      if(visited.has(i) || ((i > 0 && nums[i] == nums[i -1]) && visited.has(i - 1))) continue;

      visited.add(i);
      path.push(nums[i]);
      dfs(startIndex + 1, path);
      path.pop();
      visited.delete(i);
    }

  }
  dfs(0, []);
  return res;
}

//Test cases

const nums = [1,1,2]
console.log(permutationDups(nums))
// //Should be [[1,1,2], [1,2,1], [2,1,1]]

// const nums = [1,2,3]
// console.log(permutationDups(nums))
// // //Should be [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
