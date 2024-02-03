/*

We have a message consisting of digits 0-9 to decode. Letters are encoded to digits by their positions in the alphabet

A -> 1
B -> 2
C -> 3
...
Y -> 25
Z -> 26
Given a non-empty string of digits, how many ways are there to decode it?


*/




function decodeWays(digits) {
  // WRITE YOUR BRILLIANT CODE HERE
  const memo = {};
  function dfs(startIndex){
      if(startIndex === digits.length) return 1;
      
      if(startIndex in memo) return memo[startIndex];
      
      let ways = 0;
      
      if (digits[startIndex] == "0") {
          return ways;
      }
      
      ways += dfs(startIndex + 1);
      
      if(startIndex + 2 <= digits.length && parseInt(digits.substring(startIndex, startIndex + 2)) <= 26){
          
          ways+=dfs(startIndex + 2);
      }
      memo[startIndex] = ways;
      return ways
  }
  
  return dfs(0);
}


//Test cases

console.log(decodeWays("18"))
//Should be 2

console.log(decodeWays("123"))
//Should be 3
