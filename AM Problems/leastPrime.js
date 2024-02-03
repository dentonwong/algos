/*
Given a number n, write an efficient function to print all prime factors of n. For example, if the input number is 12, then output should be “2 2 3”. And if the input number is 315, then output should be “3 3 5 7”. 
Following are the steps to find all prime factors. 
1) While n is divisible by 2, print 2 and divide n by 2. 
2) After step 1, n must be odd. Now start a loop from i = 3 to square root of n. While i divides n, print i and divide n by i, increment i by 2 and continue. 
3) If n is a prime number and is greater than 2, then n will not become 1 by above two steps. So print n if it is greater than 2.
*/

function leastPrime(n){
  const res = [];
  while(n % 2 == 0){

    res.push(2)
    n /= 2;
  }

  for(let i = 3; i < Math.sqrt(n); i+=2){

    while( n % i == 0){
      res.push(i)
      n /= i
    }
  }

  if(n > 2)  res.push(n);
  return res.join(" ");
}

console.log(leastPrime(315));