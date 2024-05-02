/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let graph=new Array(501).fill(0)
    for(let i=0;i<501;i++){
        graph[i]=[]
    }
    dfs(root,graph)
    let dist=new Array(501).fill(-1)
    dist[target.val]=0
    let queue=[target.val]

    while(queue.length){
        let cur=queue.shift()
        for(let i=0;i<graph[cur].length;i++){
            let next=graph[cur][i]
            if(dist[next]===-1){
                dist[next]=dist[cur]+1
                queue.push(next)
            }
        }
    }
    let answer=[]
    for(let i=0;i<dist.length;i++){
        if(dist[i]===k){
            answer.push(i)
        }
    }
    
    
    return answer
};
function dfs(current,graph){
    

    if(current.left!==null ){
        graph[current.val].push(current.left.val)
        graph[current.left.val].push(current.val)
        dfs(current.left,graph)        
    }
    if(current.right!==null ){
        graph[current.val].push(current.right.val)
        graph[current.right.val].push(current.val)
        dfs(current.right,graph)        
    }
}