/*
Given a phone number that contains digits 2-9, find all possible letter combinations the phone number could translate to.
*/

const KEYBOARD = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};


function letterCombinationsOfPhoneNumber(digits) {
  // WRITE YOUR BRILLIANT CODE HERE
  const res = [];
  
  function dfs(index, path){
      
      if(index == digits.length)
          return res.push(path.join(''));
      
      for(let char of KEYBOARD[digits.charAt(index)]){
          
          path.push(char);
          dfs(index + 1, path);
          path.pop();
      }
      
  }
  dfs(0, []);
  return res;
}

//Test cases

console.log(letterCombinationsOfPhoneNumber("56"))
//Should be ["jm","jn","jo","km","kn","ko","lm","ln","lo"]