function feasible(newspapersReadTimes, numCoworkers, limit){
  let time = 0;
  let numWorkers = 0;
  
  for(let readTime of newspapersReadTimes){
      
      if(time + readTime > limit){
          time = 0;    
          numWorkers++;
      }
      time += readTime
  }
  if(time != 0 ) numWorkers++;
  return numWorkers <= numCoworkers
  
  
}



function newspapersSplit(newspapersReadTimes, numCoworkers) {
  // WRITE YOUR BRILLIANT CODE HERE
  let low = Math.max(...newspapersReadTimes);
  let high = newspapersReadTimes.reduce((acc,curr) => acc + curr, 0)
  let ans = -1;
  while(low <= high){
      
      let mid = low + Math.floor((high - low)/2);
      if(feasible(newspapersReadTimes, numCoworkers, mid)){
          ans = mid;
          high = mid - 1;
          
      }else{
          low = mid + 1;    
      }
      
  }
  
  
  return ans;
}


//Test cases

// let newspapers_read_times = [7,2,5,10,8], num_coworkers = 2
// console.log(newspapersSplit(newspapers_read_times, num_coworkers))
// //Should be 18

// let newspapers_read_times = [2,3,5,7], num_coworkers = 3
// console.log(newspapersSplit(newspapers_read_times, num_coworkers))
// //Should be 7