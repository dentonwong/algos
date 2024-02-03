/*

Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

*/

function validSentence(s, wordDict){

  const res = [];

  function dfs(startIndex, path){
    if(startIndex == s.length) return res.push(path.join(' '));

    for(let word of wordDict){

      if(s.substring(startIndex).startsWith(word)){

        path.push(word);
        dfs(startIndex + word.length, path);
        path.pop();

      }

    }


  }

  dfs(0, [])
  return res;
}
//Test cases

// let s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// console.log(validSentence(s, wordDict))
// //Should be ["cats and dog","cat sand dog"]

// let s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// console.log(validSentence(s, wordDict))
// //Should be ["pine apple pen apple","pineapple pen apple","pine applepen apple"]

// let s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// console.log(validSentence(s, wordDict))
// //Should be []