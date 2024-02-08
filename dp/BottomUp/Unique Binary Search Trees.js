/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp=new Array(21).fill(0)
    dp[0]=1
    dp[1]=1
    dp[2]=2
    for(let i=3;i<=n;i++){
      let sum=0
      for(let j=0;j<i;j++){
          sum+=dp[j]*dp[i-j-1]
      }
      dp[i]=sum
    }
    return dp[n]
  
  };
  numTrees(3)