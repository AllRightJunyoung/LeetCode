/**
 * @param {number[][]} graph
 * @return {number[]}
 */
let isCycle=false
var eventualSafeNodes = function(graph) {
    let answer=[]
    let nodes=new Array(graph.length).fill(0)
    for(let i=0;i<graph.length;i++){
        nodes[i]=new Array()
    }
    for(let i=0;i<graph.length;i++){
        for(let j=0;j<graph[i].length;j++){
            nodes[i].push(graph[i][j])
        }
    }
    for(let i=0;i<nodes.length;i++){
        if(!nodes[i].length){
            answer.push(i)
        }
    }

    for(let i=0;i<nodes.length;i++){
        isCycle=false
        if(answer.includes(i))continue
        let visited=new Array(graph.length).fill(false)
        let flag=dfs(i,nodes,visited,answer,i)
        if(flag){
            answer.push(i)
        }
    }
    answer.sort((a,b)=>a-b)
    return answer
};
function dfs(cur,nodes,visited,answer,startNode){
    if(answer.includes(cur) && !isCycle){
        return true
    }
    visited[cur]=true
    for(let i=0;i<nodes[cur].length;i++){
        const next=nodes[cur][i]
        if(!visited[next]){
            let flag=dfs(next,nodes,visited,answer,startNode)
            if(flag)return true
        }
        else if(visited[next] || startNode===next){
            isCycle=true
            return false
        }
    }
    return false
}
console.log(eventualSafeNodes([[],[0,2,3,4],[3],[4],[]]))
// console.log(eventualSafeNodes([[0],[2,3,4],[3,4],[0,4],[]]))
