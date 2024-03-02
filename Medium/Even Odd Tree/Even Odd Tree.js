/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//level이 홀수면 감소 //짝수면 증가
var isEvenOddTree = function(root) {
    let map=new Map()

    function dfs(root,depth){
        if(root===null){
            return
        }
        if(!map.has(depth)){
            map.set(depth,[root.val])
        }
        else{
            const li=map.get(depth)
            li.push(root.val)
            map.set(depth,li)
        }
        dfs(root.left,depth+1)
        dfs(root.right,depth+1)        
    }
    dfs(root,0)
    const array=[...map]
    for(let i=0;i<array.length;i++){
        const [level,nodes]=array[i]
        if(nodes.length===1){
            if(level%2===0 && nodes[0]%2===0){
                return false
            }
            else if(level%2===1 && nodes[0]%2===1){
                return false
            }
        }
        for(let j=1;j<nodes.length;j++){
            if(level%2===0){
                if(nodes[j]<=nodes[j-1] || nodes[j]%2===0 || nodes[j-1]%2===0){
                    return false
                }
            }
            else{
                if(nodes[j]>=nodes[j-1] || nodes[j]%2===1 || nodes[j-1]%2===1){
                    return false
                }
            }
        }
    }
    return true
};