/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. 
If there is no such subarray, return 0 instead.

*/

// function minSubArrayLen(target, nums) {
//   // Prefix Sum Calculation
//   const prefixSum = [0];
//   for (const n of nums) {
//       prefixSum.push(prefixSum[prefixSum.length - 1] + n);
//   }

//   let size = nums.length + 1;

//   // Main Loop
//   for (let start = 0; start < nums.length; start++) {
//       let total = 0;
//       let l = 0, r = nums.length - 1;
//       let end = -1;

//       // Binary Search + Two-Pointer Method
//       while (l <= r) {
//           const mid = Math.floor((l + r) / 2);
//           if (prefixSum[mid + 1] - prefixSum[start] >= target) {
//               end = mid;
//               r = mid - 1;
//           } else {
//               l = mid + 1;
//           }
//       }

//       // Update Minimum Size
//       if (end !== -1) {
//           size = Math.min(size, end - start + 1);
//       }
//   }

//   // Return Result
//   return size !== nums.length + 1 ? size : 0;
// }

function minSubArrayLen(target, nums) {
  const prefixSum = [0];
  for(let n of nums){
    prefixSum.push(prefixSum[prefixSum.length - 1] + n)

  }

  let size = nums.length;

  for (let start = 0; start < nums.length; start++){
    let l = 0, r = nums.length -1;
    let end = -1;

    while(l <= r){
      let mid = Math.floor((l + r)/2)

      if(prefixSum[mid + 1] - prefixSum[start] >= target){
        end = mid;
        r = mid - 1;   
      }else{
        l = mid + 1;
      }
    }
    if(end != -1) size = Math.min(size, end - start + 1);
  }
  return size != nums.length ? size : 0;
}

// Test Cases:
// const target = 7;
// const nums = [2, 3, 1, 2, 4, 3];
// const result = minSubArrayLen(target, nums);
// console.log(result);
// // Should be 2

// const target = 4;
// const nums = [1, 4, 4];
// const result = minSubArrayLen(target, nums);
// console.log(result);
// // // Should be 1

// const target = 11;
// const nums = [1,1,1,1,1,1,1,1];
// const result = minSubArrayLen(target, nums);
// console.log(result);
// // Should be 0