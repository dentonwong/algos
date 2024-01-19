/* You happen upon a puzzle box that unlocks... Something. You aren't quite sure what just yet. 
The puzzle is a 2 x 3 box, and there are 5 square sliding bricks labelled conveniently with 1 to 5. 
It can be represented as a 2 x 3 matrix containing numbers from 0 to 5, where 0 represents an empty space. For example, the pattern above can be represented by [[4, 1, 3], [2, 0, 5]].

The tiles are interlocked with each other, so you cannot take the tiles out. 
However, the tiles can move freely horizontally and vertically, so each turn, you can move a tile to an adjacent empty space. 
You have a feeling that when you move the tiles to the position [[1, 2, 3], [4, 5, 0]], the puzzle will be solved and unlock the "something". 

Input
init_pos: an integer matrix representing the initial position of the puzzle.
Output
The number of steps required to solve this puzzle, or -1 if the puzzle is impossible to solve.

Examples
Example 1:
Input:

init_pos = [[4, 1, 3], [2, 0, 5]]
Output: 5
*/

function slidingPuzzle(initPos){
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const target = JSON.stringify([[1, 2, 3], [4, 5, 0]]);

  const initState = JSON.stringify(initPos);
  if(initState == target) return 0;

  const queue = [initPos]
  const visited = new Map();
  visited.set(initState, 0);

  while(queue.length > 0){

    const topPos = queue.shift();
    const topState = JSON.stringify(topPos);

    let row = 0, col = 0;
    for (let r = 0; r < 2; r++){

      for(let c = 0; c <3; c++){

        if(topPos[r][c] == 0){
          row = r;
          col = c;
        } 
      }
    }

    for(let [deltaRow, deltaCol] of directions){
      let newRow = row + deltaRow;
      let newCol = col + deltaCol;

      if(0<=newRow && newRow < 2 && 0<=newCol && newCol < 3){
        const newPos = JSON.parse(topState);
        [newPos[row][col], newPos[newRow][newCol]] = [newPos[newRow][newCol], newPos[row][col]]
        const newState = JSON.stringify(newPos)

        if(!visited.has(newState)){
          visited.set(newState, visited.get(topState) + 1)
          queue.push(newPos)
          if(newState == target) return visited.get(newState)
        }

      }
    }
  }
}


//Test cases

// console.log(slidingPuzzle([[4, 1, 3], [2, 0, 5]]))
// //Should be 5

