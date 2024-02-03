/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  let graph=new Array(n+1).fill(0)
  let color=new Array(n+1).fill(0)
  for(let i=1;i<=n;i++){
    graph[i]=new Array()
  }

  for(let i=0;i<dislikes.length;i++){
    const [a,b]=dislikes[i]
    graph[a].push(b)
    graph[b].push(a)
  }
  
  for(let i=1;i<=n;i++){

    if(color[i]===0){
    if(!dfs(i,color,graph,1)){
      return false
    }
  }

  }
  return true
};
function dfs(current,color,graph,currentColor){

  color[current]=currentColor  
  for(let i=0;i<graph[current].length;i++){
    const next=graph[current][i]
    if(color[next]===0){
      let flag=dfs(next,color,graph,3-currentColor)
      if(!flag) return false
    }
    else if(color[next]===currentColor){ //싸이클 형성
        return false
    }  
  }
  return true
}

console.log(possibleBipartition(5,[[1,2],[3,4],[4,5],[3,5]]))


// possibleBipartition(4, [
//   [1, 2],
//   [1, 3],
//   [2, 4],
// ]);
// possibleBipartition(3, [
//   [1, 2],
//   [1, 3],
//   [2, 3],
// ]);

// // possibleBipartition(5, [
// //   [1, 2],
// //   [2, 3],
// //   [3, 4],
// //   [4, 5],
// //   [1, 5],
// // ]);
