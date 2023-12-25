/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const alpha = s[i];
    if (alpha === "(") {
      stack.push([alpha, i]);
    } else if (alpha === ")") {
      if (stack.length !== 0) {
        const top = stack[stack.length - 1][0];
        if (top === "(") {
          stack.pop();
          continue;
        }
      }
      stack.push([alpha, i]);
    }
  }
  let map = new Map();
  while (stack.length) {
    const top = stack.pop();
    map.set(top[1], top[0]);
  }
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (map.has(i)) {
      continue;
    } else {
      answer += s[i];
    }
  }
  return answer;
};

minRemoveToMakeValid("lee(t(c)o)de)");
minRemoveToMakeValid("a)b(c)d");
minRemoveToMakeValid("))((");
