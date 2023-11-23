/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let map = new Map();
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  map = [...map].sort((a, b) => a[1] - b[1]);
  let removed_cnt = 0;
  for (let i = 0; i < map.length; i++) {
    const [num, cnt] = map[i];
    if (k - cnt >= 0) {
      map[i][1] = map[i];
      removed_cnt += 1;
      k = k - cnt;
    }
  }
  answer = map.length - removed_cnt;
  return answer;
};

// findLeastNumOfUniqueInts([5, 5, 4], 1);
findLeastNumOfUniqueInts([2, 1, 1, 3, 3, 3], 3);

// findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3);
