/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const memo = {};
  memo[s.length] = 1;

  let answer = dfs(0, s, memo);
  return answer;
};

function dfs(start, s, memo) {
  if (memo[start]) {
    return memo[start];
  }

  if (s[start] === "0") {
    // 남아있는숫자의 첫번째 자리가 0이라면 디코드 불가능
    memo[start] = 0;
  } else if (start + 1 < s.length && Number(s[start] + s[start + 1]) < 27) {
    // 숫자가 두자리이상 남아있고 , 27보다 작으면 , 첫번째 자리만 디코딩해도되고 ,첫번쟤 + 두번쨰 자리까지 한번에 디코딩가능
    memo[start] = dfs(start + 1, s, memo) + dfs(start + 2, s, memo);
  } else {
    // 남아있는 숫자가 1자리 밖에 없거나 , 첫 두자리가 27보다 크다면
    memo[start] = dfs(start + 1, s, memo);
  }
  return memo[start];
}
numDecodings("12");
numDecodings("226");
numDecodings("06");
