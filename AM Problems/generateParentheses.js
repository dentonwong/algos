/*

Given an integer n, generate all strings with n matching parentheses. "matching" parentheses mean

there is equal number of opening and closing parentheses.
each opening parenthesis has matching closing parentheses.
For example, () is a valid string but )( is not a valid string because ) has no matching parenthesis before it and ( has no matching parenthesis after it.

Input
n: number of matching parentheses
Output
all valid strings with n matching parentheses


*/

function generateParentheses(n) {

  const res = [];

  function dfs(index, path, open, closed){

    if(index == 2 * n) return res.push(path.join(''));
    if(open < n){
      path.push('(');
      dfs(index + 1, path, open + 1, closed)
      path.pop();
    }
    if(open > closed){
      path.push(')');
      dfs(index + 1, path, open, closed + 1)
      path.pop();
    }
  }
  dfs(0, [], 0 , 0);
  return res;
}


//Test cases

// console.log(generateParentheses(2))
// //Should be (()) ()()

// console.log(generateParentheses(3))
// // //Should be ((())) (()()) (())() ()(()) ()()()