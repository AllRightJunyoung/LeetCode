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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let maxDepth=0
    let node=root.val
    function dfs(root,depth){
        if(root===null){
            return
        }
        
        if(root.left===null && root.right===null){
            if(depth>maxDepth){
                maxDepth=depth
                node=root.val
            }
        }

        dfs(root.left,depth+1)
        dfs(root.right,depth+1)
        return
    }
    dfs(root,0)
    return node
};