/*
Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.
*/

function BinarySearchRecursive(arr, target, left = 0, right = arr.length - 1){

  if(left <= right){
    let mid = left + Math.floor((right - left)/2)

  if(arr[mid] == target) return mid;

  if(arr[mid] < target)
    return binarySearch(arr, target, mid + 1, right);
  else
    return binarySearch(arr, target, left, mid - 1);

    
  }

  return -1
}