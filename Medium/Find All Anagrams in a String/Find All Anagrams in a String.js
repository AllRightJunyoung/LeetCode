/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 슬라이딩 윈도우
var findAnagrams = function (s, p) {
  let map = new Map();
  let p_map = new Map();
  let answer = [];

  if (p.length > s.length) {
    return answer;
  }

  for (let i = 0; i < p.length; i++) {
    if (!p_map.has(p[i])) {
      p_map.set(p[i], 1);
    } else {
      p_map.set(p[i], p_map.get(p[i]) + 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
    if (i >= p.length - 1) { //슬라이딩에 도달하면
      const start = i - (p.length - 1);
      if (checkAnswer(map, p, p_map)) {
        answer.push(start);
      }
      map.set(s[start], map.get(s[start]) - 1);
    }
  }
  return answer;
};
function checkAnswer(map, p, p_map) {
  for (let i = 0; i < p.length; i++) {
    if (p_map.get(p[i]) !== map.get(p[i])) {
      return false;
    }
  }
  return true;
}
