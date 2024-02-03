/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp=new Array(60).fill(0)
    dp[2]=1
    dp[3]=2
    dp[4]=4
    dp[5]=6
    dp[6]=9

    for(let i=7;i<=58;i++){
        dp[i]=dp[i-3]*3
    }
    return dp[n]
};

integerBreak(2)
integerBreak(10)