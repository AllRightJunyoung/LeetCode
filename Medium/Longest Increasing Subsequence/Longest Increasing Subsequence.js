/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(-1);
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    const current = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      if (current > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    answer = Math.max(dp[i], answer);
  }
  return answer;
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
lengthOfLIS([0, 1, 0, 3, 2, 3]);
lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);
