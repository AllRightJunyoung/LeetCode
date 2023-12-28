/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let answer;
var combinationSum = function (candidates, target) {
  answer = [];

  dfs([], candidates, target, 0, 0);
  return answer;
};
function dfs(cur, candidates, target, total, idx) {
  if (total > target) {
    return;
  }
  if (total === target) {
    answer.push([...cur]);
    return;
  }
  for (let i = idx; i < candidates.length; i++) {
    cur.push(candidates[i]);
    dfs(cur, candidates, target, total + candidates[i], i);
    cur.pop();
  }
}

combinationSum([2, 3, 6, 7], 7);
combinationSum([2, 3, 5], 8);
