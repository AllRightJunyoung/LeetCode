/**
 * @param {number[][]} pairs
 * @return {number}
 */

// LIS DP
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=>a[0]-b[0])
    let dp=new Array(pairs.length).fill(1)
    let answer=1
    for(let i=1;i<pairs.length;i++){
        const [a_x,a_y]=pairs[i]
        for(let j=0;j<i;j++){
            const [b_x,b_y]=pairs[j]
            if(a_x>b_y){
                dp[i]=Math.max(dp[j]+1,dp[i])
            }
        }
        answer=Math.max(dp[i],answer)
    }
    return answer

};
// findLongestChain([[1,2],[2,3],[3,4]])
findLongestChain([[1,2],[7,8],[4,5]])