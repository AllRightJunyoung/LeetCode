/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp=new Array(n+1).fill(Infinity)
    dp[0]=0
    dp[1]=1
    dp[2]=2
    dp[3]=3
    for(let i=4;i<=n;i++){
      for(let j=1;j*j<=i;j++){
        dp[i]=Math.min(dp[i],dp[i-j*j]+1) // +1 은 제곱수 경우 12 = 3+9(1)
      }
    }
    return dp[n]
    
  };
  numSquares(13)
  numSquares(12)