/*

Given a string and a list of words, determine if the string can be constructed from concatenating words from the list of words. A word can be used multiple times.

*/



function wordBreak(s, words) {
  const memo = [];

  function dfs(startIndex) {
      if (startIndex === s.length) return true;

      if (startIndex in memo) return memo[startIndex];

      let ans = false;
      for (const word of words) {
          if (s.slice(startIndex).startsWith(word)) {
              ans = ans || dfs(startIndex + word.length)
          }
      }
      memo[startIndex] = ans;
      return ans;
  }

  return dfs(0);
}


//Test cases

console.log(wordBreak("algomonster", ["algo", "monster"]))
// //Should be true

console.log(wordBreak("aab", ["a", "c"]))
// //Should be false