/*
There are a total of n courses a student has to take, numbered from 0 to n-1. A course may have prerequisites. 
The "depends on" relationship is expressed as a pair of numbers. For example, [0, 1] means you need to take course 1 before taking course 0. 
Given n and the list of prerequisites, decide if it is possible to take all the courses.
*/



function isValidCourseSchedule(n, prerequisites) {
  // WRITE YOUR BRILLIANT CODE HERE
  function getDegrees(graph){
      const inDegrees = new Map();
      for(let key of graph.keys()){
          inDegrees.set(key, 0);    
      }
      for(let key of graph.keys()){
          
          for(let dep of graph.get(key)){
              inDegrees.set(dep, inDegrees.get(dep) + 1);    
          }
      }
      return inDegrees;
  }
  
  function topoSort(graph){
      const inDegrees = getDegrees(graph);
      const queue = [];
      let count = 0;
      let inDegCount = 0;
      for(let key of inDegrees.keys()){
          
          if(inDegrees.get(key) == 0){
              queue.push(key);        
          }
          inDegCount++;
      }
      while(queue.length > 0){
          const top = queue.shift();
          for(let dep of graph.get(top)){ 
              inDegrees.set(dep, inDegrees.get(dep) - 1);
              if(inDegrees.get(dep) == 0) queue.push(dep);
          }
          count++;
      }

      return inDegCount == count;
  }
  
  const graph = new Map();
  
  for(let req of prerequisites){
      
      for(let i in req){
          if(!graph.has(req[i]))
              graph.set(req[i], []);    
      }
      graph.get(req[1]).push(req[0]);    

  }
  return topoSort(graph);
}