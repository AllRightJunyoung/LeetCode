/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */

// 회의 일정을 효율적으로 관리하여 회의가 진행되지 않는 날짜의 수를 계산
var countDays = function (days, meetings) {
  meetings.sort((a, b) => a[0] - b[0])

  let tail = meetings[0][1] // 현재까지 진행된 회의들중 가장 늦은 시간
  let cnt = meetings[0][0] - 1 // 회의가 진행되지 않은 날짜를센다

  for (let i = 1; i < meetings.length; i++) {
    if (tail < meetings[i][0] - 1) {
      //미팅이 끝나는시간보다 현재 미팅시작시간 -1이 클경우
      cnt += meetings[i][0] - tail - 1 // 현재 미팅시작시간 - 끝나는시간-1 === 회의가 진행되지 않은날짜
      tail = meetings[i][1]
    } else {
      // 미팅날짜 초기화
      tail = Math.max(tail, meetings[i][1])
    }
  }
  cnt += days - tail
  return cnt
}

countDays(10, [
  [5, 7],
  [1, 3],
  [9, 10],
])
// countDays(5, [
//   [2, 4],
//   [1, 3],
// ])
// countDays(6, [[1, 6]])
