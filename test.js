/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
   let dp=new Array(38).fill(0)
   dp[0]=0
   dp[1]=1
   dp[2]=1
   for(let i=3;i<=n;i++){
    dp[i]=dp[i-3]+dp[i-2]+dp[i-1]
   }
   let answer=dp[n]
   return answer


};

tribonacci(4)
tribonacci(25)