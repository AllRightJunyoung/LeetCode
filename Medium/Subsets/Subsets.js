/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let answer = [];
  dfs([], nums, answer, 0);

  return answer;
};
function dfs(mynums, nums, answer, idx) {
  if (mynums.length > nums.length) {
    return;
  }
  answer.push([...mynums]);
  for (let i = idx; i < nums.length; i++) {
    mynums.push(nums[i]);
    dfs(mynums, nums, answer, i + 1);
    mynums.pop();
  }
}

subsets([1, 2, 3]);
subsets([0]);
