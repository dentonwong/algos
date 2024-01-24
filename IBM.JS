/*A shopkeeper sells n items where the price of the ith item is price[i]. To maintain balance, the shopkeeper wishes to adjust the price of items such that the median of prices is exactly k. In one move, the shopkeeper can increase or decrease the price of any item by 1, and the shopkeeper can perform this move any number of times. Find the minimum number of moves in which the median of prices becomes exactly k.

Consider n = 5, price = [4, 2, 1, 4, 7] and k =3. Decrease price[0] by 1, the resulting array is [3, 2, 1, 4, 7]; on sorting, this becomes [1,2,3,4,7], whose median equals k =3. Thus, in one move, the median becomes 3 and the answer is 1.

How would I do this with JS for function getMinimumMoves seems like a bfs situation */

function getMedian(arr) {
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
}

function getMinimumMoves(price, k) {
  price.sort((a, b) => a - b);
  const n = price.length;
  const queue = [{ array: price, index: 0, moves: 0 }];

  while (queue.length > 0) {
    const { array, index, moves } = queue.shift();

    const currentMedian = getMedian(array);

    if (currentMedian === k) {
      return moves;
    }

    if (index + 1 < n) {
      queue.push({ array: [...array], index: index + 1, moves: moves });
      
      // Increment the price of the next item
      const newArrayInc = [...array];
      newArrayInc[index]++;
      queue.push({ array: newArrayInc, index: index + 1, moves: moves + 1 });

      // Decrement the price of the next item
      const newArrayDec = [...array];
      newArrayDec[index]--;
      queue.push({ array: newArrayDec, index: index + 1, moves: moves + 1 });

      
    }
  }

  return -1; // If no solution is found
}

// Example usage
const price = [4, 2, 1, 4, 7];
const k = 3;
const result = getMinimumMoves(price, k);
console.log(result); // Output: 1