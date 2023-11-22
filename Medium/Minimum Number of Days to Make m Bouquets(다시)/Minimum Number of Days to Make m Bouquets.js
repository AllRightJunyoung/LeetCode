/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

// 시간초과.. 바이너리서치 써야함

function condition(bloomDay, day, k) {
  let cnt = 0;
  let answer = 0;
  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= day) {
      cnt += 1;
    } else {
      cnt = 0;
    }
    if (cnt === k) {
      cnt = 0;
      answer += 1;
    }
  }

  return answer;
}
var minDays = function (bloomDay, m, k) {
  const needs = m * k;
  if (needs > bloomDay.length) {
    return -1;
  }

  let left = Math.min(...bloomDay);
  let right = Math.max(...bloomDay);

  // condtion을 만족하는 가장 작은값을 보장
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    const c = condition(bloomDay, mid, k);
    if (c >= m) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
