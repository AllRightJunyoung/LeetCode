/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
  let map = new Map();
  for (let i = minSize; i <= maxSize; i++) {
    for (let j = 0; j < s.length - (i - 1); j++) {
      const substr = s.substring(j, j + i);

      if (!isValid(substr, maxLetters)) continue;
      if (!map.has(substr)) {
        map.set(substr, 1);
      } else {
        map.set(substr, map.get(substr) + 1);
      }
    }
  }
  let answer = [...map].sort((a, b) => b[1] - a[1]);

  return answer.length ? answer[0][1] : 0;
};
function isValid(word, maxLetters) {
  let set = new Set([...word]);
  return set.size <= maxLetters ? true : false;
}

// maxFreq("aababcaab", 2, 3, 4);
// maxFreq("aaaa", 1, 3, 3);
maxFreq("aaaaacbc", 2, 4, 6);
