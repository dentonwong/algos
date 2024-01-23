/*
Given a list of points on a 2D plane. Find k closest points to origin (0, 0).

Input: [(1, 1), (2, 2), (3, 3)], 1

Output: [(1, 1)]

*/




class HeapItem {
    
  constructor(item, priority = item){
      this.item = item;
      this.priority = priority;
      
  }
}

class MinHeap {
  
  constructor(){
      this.heap = [];
  }
  
  push(node){
      this.heap.push(node);
      this.bubble_up();
  }
  
  bubble_up(){
      
      let index = this.size() -1;
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1)/2);
      let parent = this.heap[parentIndex];
      
      while(index > 0){
          
          
          if(parent.priority <= element.priority) break;
          this.heap[index] = parent;
          this.heap[parentIndex] = element;
          index = parentIndex;
      }
      
  }
  
  pop(){
      let min = this.heap[0];
      this.heap[0] = this.heap[this.size()-1];
      this.heap.pop();
      this.bubble_down();
      return min;
  }
  
  bubble_down(){
      
      let index = 0;
      let min = index;
      let n = this.size();
      
      while(index < n){
          let left = 2 * index + 1;
          let right = left + 1;
          
          if(left < n && this.heap[left].priority < this.heap[min].priority)
              min = left;
              
          if(right < n && this.heap[right].priority < this.heap[min].priority)
              min = right;
          
          if(min == index) break;
          [this.heap[index], this.heap[min]] = [this.heap[min], this.heap[index]]
          index = min;
          
          
      }
      
      
  }
      
  size(){
      
      return this.heap.length;
      
  }
      
  peek(){
      return this.heap[0];        
  }


}

function kClosestPoints(points, k) {
  // WRITE YOUR BRILLIANT CODE HERE
  const heap = new MinHeap();
  const res= [];
  for(let pt of points){
      
      heap.push(new HeapItem(pt, pt[0]**2 + pt[1]**2))    
      
  }
  
  for(let i = 0; i < k ; i++){
          
      res.push(heap.pop().item);
  }
  
  return res;
  
}


//Test cases

console.log(kClosestPoints([[1, 1], [2, 2], [3, 3]], 1))
//Should be [(1, 1)]

