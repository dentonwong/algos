/*

You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. 
You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Return true if you can make this square and false otherwise.
*/


// function squareMatches(matches){

//   const sum = matches.reduce((acc, curr) => acc + curr);
//   if(sum % 4 != 0) return false;
//   const side_length = sum /4;
//   matches.sort();
//   console.log(side_length)
  
//   function isValid(currentL, matchL){

//     return currentL + matchL <= side_length

//   }

//   function dfs(index, currentL){

//       if(index == matches.length) return true;
//       let ans = false;
//       for(let i = index; i < matches.length; i++){

//         if(isValid(currentL, matches[i])){
//           currentL += matches[i]
//           if(currentL == side_length)
//             currentL = 0
//           ans = ans || dfs(index + 1, currentL)
//         }

//       }

//       return ans;
//   }

//   return dfs(0, 0);


// }

function squareMatches(matches){
  const sum = matches.reduce((acc, curr) => acc + curr);
  if(sum % 4 !== 0) return false;
  const side_length = sum /4 ;
  matches.sort();

  function isValid(currentL, matchesL){

    return currentL + matchesL <= side_length
  }
  function dfs(index, sides){
    if(index == matches.length) 
      return (side_length == sides[0]) && (side_length == sides[1]) && (side_length == sides[2]) && (side_length == sides[3])

    for(let i = 0; i < 4; i++){

      if(isValid(sides[i], matches[index])){
        sides[i] += matches[index]
        if(dfs(index +1, sides)) return true;
        sides[i] -= matches[index]
      }

    }

    return false;
  }
  return dfs(0, [0, 0, 0, 0])

}


//Test cases

// const matchsticks = [1,1,2,2,2]
// console.log(squareMatches(matchsticks))
// //Should be true

// const matchsticks = [3,3,3,3,4]
// console.log(squareMatches(matchsticks))
// //Should be false
