/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let answer = [];
  let visited = new Array(nums.length).fill(false);
  dfs(nums, [], answer, visited);
  return answer;
};

function dfs(nums, myNums, answer, visited) {
  if (myNums.length === nums.length) {
    answer.push([...myNums]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      myNums.push(nums[i]);
      dfs(nums, myNums, answer, visited);
      visited[i] = false;

      myNums.pop();
    }
  }
  return;
}

permute([1, 2, 3]);
permute([0, 1]);
permute([1]);
