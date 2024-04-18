/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */


// manager = 해당 노드의 직속상사 , headID =root ,
//https://leetcode.com/problems/time-needed-to-inform-all-employees/?envType=study-plan-v2&envId=graph-theory
// 1. headID에서부터 출발 
//2. 연결된 노드의 informTime을 더하면서 dfs 
var numOfMinutes = function(n, headID, manager, informTime) {
    let nodes=new Array(n).fill(0)
    let visited=new Array(n).fill(false)

    for(let i=0;i<nodes.length;i++){
        nodes[i]=new Array()
    }

    let answer=0
    for(let i=0;i<manager.length;i++){
        if(manager[i]===-1){
            continue
        }
        nodes[manager[i]].push(i)
    }   
    const dfs=(cur,cost)=>{
        visited[cur]=true        
        cost+=informTime[cur]
        answer=Math.max(cost,answer)
        for(let i=0;i<nodes[cur].length;i++){
            let next=nodes[cur][i]
            if(!visited[next]){
                dfs(next,cost)
            }
        }
    }
    dfs(headID,0)
    return answer
};

numOfMinutes(15,0,[-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0])
numOfMinutes(6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0])