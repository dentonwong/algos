/*
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. 
You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
*/

function restoreIP(s){
  const res = [];
  function getSegments(index){

    const segs= [];
    for(let i = index; i < index + 3; i++){

      if(i < s.length){
        segs.push(s.substring(index, i + 1))
      }
    }
    return segs;
  }

  function isValid(seg){
    if(seg == 0) return true;
    else if(seg[0]=='0' || seg > 255) return false;
    return true;
  }
  
  function dfs(startIndex, path){
    if(startIndex == s.length && path.length == 4) {
      res.push(path.join('.'))
    }
    if(path.length > 4) return;

    for(let seg of getSegments(startIndex)){
      if(isValid(seg)){
        path.push(seg);
        dfs(startIndex + seg.length, path)
        path.pop();
      }

    }
  }
  dfs(0, [])
  return res;
}


//Test
console.log(restoreIP("25525511135"))
//Output: ["255.255.11.135","255.255.111.35"]

console.log(restoreIP("0000"))
//Output: ["0.0.0.0"]

console.log(restoreIP("101023"))
//Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
