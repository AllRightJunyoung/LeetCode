/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let graph=new Array(isConnected.length+1).fill(0)
    let visited=new Array(isConnected.length+1).fill(false)
    for(let i=1;i<=isConnected.length;i++){
        graph[i]=new Array()
    }
    for(let i=0;i<isConnected.length;i++){
        for(let j=0;j<isConnected.length;j++){
            let a= isConnected[i][j]
            if(a===1){
                graph[i+1].push(j+1)
            }
        }
    }
    let answer=0
    for(let i=1;i<=isConnected.length;i++){
        if(!visited[i]){
            dfs(i,visited,graph)
            answer+=1
        }
    }
    return answer
};

function dfs(cur,visited,graph){
    visited[cur]=true
    for(let i=0;i<graph[cur].length;i++){
        const next=graph[cur][i]
        if(!visited[next]){
            dfs(next,visited,graph)
        }

    }
}

findCircleNum([[1,1,0],[1,1,0],[0,0,1]])