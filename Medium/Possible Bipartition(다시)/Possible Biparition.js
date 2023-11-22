/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const graph = new Array(n + 1).fill(0).map(() => new Array());
  const visited = new Array(n + 1).fill(false);
  const colors = new Array(n + 1).fill(1);

  for (let i = 0; i < dislikes.length; i++) {
    let [a, b] = dislikes[i];
    graph[a].push(b);
    graph[b].push(a);
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      if (!dfs(i, graph, visited, colors)) {
        return false;
      }
    }
  }
  return true;
};

function dfs(cur, graph, visited, color) {
  for (let i = 0; i < graph[cur].length; i++) {
    let next = graph[cur][i];
    if (!visited[next]) {
      visited[next] = true;
      color[next] = 3 - color[cur]; // 그룹매핑
      if (!dfs(next, graph, visited, color)) {
        return false;
      }
    } else if (color[next] === color[cur]) {
      return false;
    }
  }
  return true;
}

// possibleBipartition(4, [
//   [1, 2],
//   [1, 3],
//   [2, 4],
// ]);
possibleBipartition(3, [
  [1, 2],
  [1, 3],
  [2, 3],
]);

possibleBipartition(5, [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 5],
]);
