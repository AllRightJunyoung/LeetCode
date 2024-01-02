/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let [even, odd] = [0, 0];

  // 두 홀수의 차이는 2 , 두 짝수의 차이는 2 , 차이가 2가 되면 cost는 0이다
  // 홀수와 짝수끼리는 이동하는데 비용이안든다.
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  answer = Math.min(even, odd);

  return answer;
};

// minCostToMoveChips([1, 2, 3]);
// minCostToMoveChips([2, 2, 2, 3, 3]);
minCostToMoveChips([1, 1000000000]);
