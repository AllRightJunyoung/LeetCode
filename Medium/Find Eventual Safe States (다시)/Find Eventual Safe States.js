/**
 * @param {number[][]} graph
 * @return {number[]}
 */

// 싸이클 찾기
var eventualSafeNodes = function(graph) {
    let answer=[]

    const map=new Map()
    for(let i=0;i<graph.length;i++){
        if(dfs(graph,i,map)){
            answer.push(i)
        }
    }



    return answer
};
function dfs(graph,node,map){
    if(map.has(node)) return map.get(node)
   
    map.set(node,false)

    for(let n of graph[node]){
        if(!dfs(graph,n,map)){
            return false
        }
    }
    map.set(node,true)
    return true
}
console.log(eventualSafeNodes([[],[0,2,3,4],[3],[4],[]]    ))
console.log(eventualSafeNodes([[],[0,2,3,4],[3],[4],[]]))
// console.log(eventualSafeNodes([[0],[2,3,4],[3,4],[0,4],[]]))
