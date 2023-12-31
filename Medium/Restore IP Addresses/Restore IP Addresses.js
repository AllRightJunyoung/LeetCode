/**
 * @param {string} s
 * @return {string[]}
 */
let answer = [];
var restoreIpAddresses = function (s) {
  answer = [];
  dfs(answer, 0, [], s);
  return answer;
};
function dfs(answer, idx, currentIp, s) {
  if (currentIp.length === 4) {
    let ip = [...currentIp].join(".");
    if (ip.length === s.length + 3) {
      answer.push(ip);
    }
    return;
  }

  for (let i = idx; i < s.length; i++) {
    let subString = s.substring(idx, i + 1);
    if (Number(subString) <= 255) {
      if (subString[0] === "0" && subString.length >= 2) continue;
      currentIp.push(subString);
      dfs(answer, i + 1, currentIp, s); // 인덱스 끝나는지점부터 시작하는게 핵심
      currentIp.pop();
    }
  }
}

// restoreIpAddresses("25525511135");
restoreIpAddresses("0000");
// restoreIpAddresses("101023");
