/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let degree=new Array(numCourses).fill(0)
    let graph=new Array(numCourses).fill(0)

    for(let i=0;i<numCourses;i++){
        graph[i]=new Array()
    }
    let queue=[]
    for(let i=0;i<prerequisites.length;i++){
        const[a,b]=prerequisites[i]
        degree[a]+=1
        graph[a].push(b)
        graph[b].push(a)
    }
    for(let i=0;i<numCourses;i++){
        if(degree[i]===0){
            queue.push(i)
        }
    }
    let answer=[]
    while(queue.length!==0){
        let cur=queue.shift()
        answer.push(cur)
        for(let i=0;i<graph[cur].length;i++){
            const next=graph[cur][i]
            degree[next]-=1
            if(degree[next]===0){
                queue.push(next)
            }
        }
    }
    return answer.length!==numCourses ? [] : answer
};
findOrder(3,[[1,0],[1,2],[0,1]])
// findOrder(2,[[1,0]])
// findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])
// findOrder(1,[])