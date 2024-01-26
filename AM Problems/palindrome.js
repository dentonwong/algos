/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

*/


function isPalindrome(s){
  let l = 0;
  let r = s.length -1;
  
  while(l < r){
  
      if(s[l] !== s[r]) return false;
      l++;
      r--;
      
  }
  return true;
  
}

function partition(s) {
  // WRITE YOUR BRILLIANT CODE HERE
  const res = [];
  function dfs(start, path){
      if(start == s.length)
          return res.push([...path]);
      
      for(let end = start; end < s.length; end++){
        const prefix = s.substring(start, end + 1)
        if(isPalindrome(prefix)){
            path.push(prefix);    
            dfs(end + 1, path);
            path.pop();
        }
      }      
      
      
  }
  dfs(0, []);
  return res;
}

//Test cases

console.log(partition('aab'))
/* // should be
[
  ["a","a","b"],
  ["aa","b"]
]*/