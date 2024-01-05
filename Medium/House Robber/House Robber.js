/**
 * @param {number[]} nums
 * @return {number}
 */

// 현재 위치에서 -2 까지 갱신 가능 , 3이상이면 -3까지 가능
var rob = function (nums) {
  let dp = new Array(nums.length + 1).fill(0);
  nums.unshift(0);
  dp[1] = nums[1];

  let answer = dp[1];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = dp[i - 2] + nums[i];

    if (i >= 3) {
      dp[i] = Math.max(dp[i], dp[i - 3] + nums[i]);
    }
    answer = Math.max(dp[i], answer);
  }
  return answer;
};
// rob([2, 1, 1, 2]);

rob([1, 2, 3, 1]);
rob([2, 7, 9, 3, 1]);
