/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const memo = {};
  let answer = dfs(0, s, wordDict, memo);
  console.log(answer);
  return answer;
}

function dfs(start, s, wordDict, memo) {
  if (start in memo) {
    return memo[start];
  }
  if (start === s.length) {
    memo[start] = true;
    return true;
  }

  for (let i = 0; i < wordDict.length; i++) {
    const word = wordDict[i];
    const substring = s.substring(start, start + word.length);
    if (substring === word) {
      if (dfs(start + word.length, s, wordDict, memo)) {
        memo[start] = true;
        return true;
      }
    }
  }
  memo[start] = false;

  return false;
}
// wordBreak("leetcode", ["leet", "code"]);
wordBreak("applepenapple", ["apple", "pen"]);
