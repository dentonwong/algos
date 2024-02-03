/*
Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.

Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.
*/


function differenceIntegers(length, diff){
  const res = [];

  function dfs(index, path){
    if(index == length && path.length == length) return res.push(path.join(""));

    if(path.length > length) return;
    
    let currdigit = path[path.length - 1];
    if(currdigit - diff >= 0){
      path.push(currdigit - diff)
      dfs(index + 1, path);
      path.pop()
    }
    if(currdigit + diff <= 9) {
      path.push(currdigit + diff)
      dfs(index + 1, path);
      path.pop()
    }

    


  }

  for(let i = 1; i < 10; i++){

    dfs(1, [i])
  }
  return res;
}

//Test cases

// let n = 3, k = 7
// console.log(differenceIntegers(n,k))
// //Should be [181,292,707,818,929]

let n = 2, k = 2
console.log(differenceIntegers(n,k))
//Should be [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]