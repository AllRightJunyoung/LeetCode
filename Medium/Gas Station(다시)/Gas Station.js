/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let n = gas.length;
  let fuel = 0;
  let totalFuel = 0;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    fuel += gas[i] - cost[i]; // 충전 비용
    totalFuel += gas[i] - cost[i];
    if (fuel < 0) {
      fuel = 0;
      answer = i + 1;
    }
  }
  return totalFuel < 0 ? -1 : answer;
};

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
// canCompleteCircuit([2, 3, 4], [3, 4, 3]);
