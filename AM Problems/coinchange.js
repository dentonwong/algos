/*
You are given coins of different denominations and an amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
*/



function coinChange(coins, amount) {
  // WRITE YOUR BRILLIANT CODE HERE
  const memo = {};
  function dfs(sum){
      if(sum == amount) return 0;
      
      if(sum > amount) return Infinity;
      
      if(sum in memo) return memo[sum];
      
      let ans = Infinity;
      
      for(let coin of coins){
          
          ans = Math.min(ans, dfs(sum + coin) + 1);
          
      }
      memo[sum] = ans;
      return ans;
      
  }
  const result = dfs(0);
  return result == Infinity ? -1 : result;
}

//Test cases

console.log(coinChange([1, 2, 5], 11))
//Should be 3

console.log(coinChange([3], 1))
//Should be -1