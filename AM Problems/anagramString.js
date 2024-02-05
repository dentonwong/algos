function findAllAnagrams(original, check) {
  const originalLen = original.length, checkLen = check.length;
  if (originalLen < checkLen) return [];

  const res = [];
  const checkCounter = new Map();
  const window = new Map();  // ascii value of 'a'
  for (let i = 0; i < checkLen; i++) {
      checkCounter.set(check.charAt(i), checkCounter.get(check.charAt(i)) + 1 || 1);
      window.set(original.charAt(i), window.get(original.charAt(i)) + 1 || 1);
  }
  if (equals(window, checkCounter)) res.push(0);
  for (i = checkLen; i < originalLen; i++) {
      window.set(original.charAt(i - checkLen), window.get(original.charAt(i - checkLen)) - 1);
      if(window.get(original.charAt(i - checkLen)) == 0) 
          window.delete(original.charAt(i - checkLen));
      window.set(original.charAt(i), window.get(original.charAt(i)) + 1 || 1);
      if (equals(window, checkCounter)) res.push(i - checkLen + 1);
  }
  return res;
}

function equals(map1, map2) {
  if( map1.size !== map2.size) return false;
  
  for(let [key, val] of map1.entries()){
      if(val != map2.get(key))    
          return false;
  }
  return true;
}