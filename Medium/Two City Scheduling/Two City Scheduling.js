/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let newCity = [];
  for (let i = 0; i < costs.length; i++) {
    const [a, b] = costs[i];
    newCity.push([a, b, Math.abs(a - b)]);
  }

  // 두 도시의 대한 비용 차이가 심한것을 기준으로 정렬
  newCity.sort((a, b) => b[2] - a[2]);

  let [a, b] = [0, 0];
  let total = 0;
  // 최소비용 먼저 추가 하고 , 나머지 도시에 추가
  for (let i = 0; i < newCity.length; i++) {
    if (a === newCity.length / 2) {
      total += newCity[i][1];
      continue;
    } else if (b === newCity.length / 2) {
      total += newCity[i][0];
      continue;
    }

    if (newCity[i][0] > newCity[i][1]) {
      b += 1;
      total += newCity[i][1];
    } else {
      a += 1;
      total += newCity[i][0];
    }
  }
  return total;
};

// twoCitySchedCost([
//   [10, 20],
//   [30, 200],
//   [400, 50],
//   [30, 20],
// ]);

// twoCitySchedCost([
//   [259, 770],
//   [448, 54],
//   [926, 667],
//   [184, 139],
//   [840, 118],
//   [577, 469],
// ]);

twoCitySchedCost([
  [515, 563],
  [451, 713],
  [537, 709],
  [343, 819],
  [855, 779],
  [457, 60],
  [650, 359],
  [631, 42],
]);
