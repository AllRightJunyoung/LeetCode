/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let answer = 0;
var findTargetSumWays = function (nums, target) {
  answer = 0;
  dfs(nums, 0, 0, target);
};
function dfs(nums, idx, total, target) {
  if (idx === nums.length) {
    if (target === total) {
      answer += 1;
    }
    return;
  }

  dfs(nums, idx + 1, total + nums[idx], target);
  dfs(nums, idx + 1, total - nums[idx], target);

  return;
}

findTargetSumWays([1, 1, 1, 1, 1], 3);
// findTargetSumWays([1], 1);
