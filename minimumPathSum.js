/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

*/

/*
function minPathSum(grid){
  const rowL = grid.length;
  const colL = grid[0].length;

  const distances = new Array(rowL).fill().map(()=> new Array(colL).fill(Infinity));

  function getNeighbors(node){
    const neighbors = [];
    const [r, c] = node;
    const deltaRow = [0, 1]
    const deltaCol = [1, 0]

    for(let i in deltaRow){
      const newRow = r + deltaRow[i];
      const newCol = c + deltaCol[i];

      if(0<= newRow && newRow <rowL && 0<=newCol && newCol < colL){
        neighbors.push([newRow, newCol])
      }

    }

    return neighbors;

  }

  function bfs(start){

    const queue = [start]
    distances[start[0]][start[1]] = grid[start[0]][start[1]]
    //distances holds the least sum of the values in grid from the starting point to the current point in the grid

    while(queue.length > 0){
      const node = queue.shift();
      const [r, c] = node;

      for(let [newRow, newCol] of getNeighbors(node)){

        const newVal = grid[newRow][newCol] + distances[r][c]
        if(newVal < distances[newRow][newCol]){
          distances[newRow][newCol] = newVal;
          queue.push([newRow, newCol])
        }

      }
    }

    return distances[rowL - 1][colL - 1];
  }

  return bfs([0,0]);
}
*/

function minPathSum(grid){

  function getNeighbors(node){
    const neighbors = [];
    const [r , c] = node;
    const deltaRow = [0, 1];
    const deltaCol = [1, 0];

    for(let i in deltaRow){
      const newRow = r + deltaRow[i];
      const newCol = c + deltaCol[i];
      
      if(0<= newRow && newRow < grid.length && 0<= newCol && newCol < grid[0].length){
        neighbors.push([newRow, newCol])
      }
    }

    return neighbors;
  }

  const queue = [[0 , 0]];
  const sumMap = new Map();
  sumMap.set("0, 0", 1);

  while(queue.length > 0){

    const node = queue.shift();
    const [r, c] = node;

    for(let neighbor of getNeighbors(node)){
      const [newR, newC] = neighbor;
      if(!sumMap.has(`${newR}, ${newC}`))
        sumMap.set(`${newR}, ${newC}`, sumMap.get(`${node[0]}, ${node[1]}`) + grid[newR][newC])
      else{
        const curr = sumMap.get(`${newR}, ${newC}`);
        
        sumMap.set(`${newR}, ${newC}`, Math.min(curr, sumMap.get(`${node[0]}, ${node[1]}`) + grid[newR][newC]))
      }
      queue.push([newR, newC])
    }


  }
  //console.log(sumMap)

  return sumMap.get(`${grid.length - 1}, ${grid[0].length - 1}`);
}


//Test cases

// const grid = [[1,3,1],[1,5,1],[4,2,1]]
// console.log(minPathSum(grid))
// // // //Should be 7

// const grid = [[1,2,3],[4,5,6]]
// console.log(minPathSum(grid))
// // //Should be 12

