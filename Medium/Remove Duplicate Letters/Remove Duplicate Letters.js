/**
 * @param {string} s
 * @return {string}
 */

// 주어진 문자열에서 중복 문자를 제거했을때 사전순으로 작은 알파벳을 출력해바라
// sol:

var removeDuplicateLetters = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    while (
      stack.length &&
      stack[stack.length - 1] > s[i] &&
      map.get(stack[stack.length - 1]) > 0 &&
      !stack.includes(s[i])
    ) {
      // 현재 문자가 스택의 꼭대기에 있는거보다 크고 , 스택의 꼭대기에 있는것이 뒤에도 존재하고 , 스택안에 현재 s[i]가 존재하지않을경우
      stack.pop();
    }
    if (!stack.includes(s[i])) {
      stack.push(s[i]);
    }
    map.set(s[i], map.get(s[i]) - 1);
  }
  let answer = stack.join("");

  return answer;
};

removeDuplicateLetters("bcabc")
