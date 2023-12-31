/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let map = new Map();
  let answer = -1;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
    } else {
      const pos = map.get(s[i]);
      answer = Math.max(i - pos - 1, answer);
    }
  }
  return answer;
};

maxLengthBetweenEqualCharacters("aa");

maxLengthBetweenEqualCharacters("abca");
maxLengthBetweenEqualCharacters("cbzxy");
