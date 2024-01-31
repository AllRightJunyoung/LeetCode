/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp=new Array(amount+1).fill(Infinity)
    for(let i=0;i<coins.length;i++){
        const coin=coins[i]
        dp[coin]=1
    }

    coins.sort((a,b)=>a-b)
    dp[0]=0
    for(let i=1;i<=amount;i++){
        for(let j=0;j<coins.length;j++){
            let coin=coins[j]
            if(i<=coin)break
        dp[i]=Math.min(dp[i],dp[i-coin]+1)
        // 현재 amount= 현재 amount-coin +1
        }
    }
    let ans;
    if(dp[amount]===Infinity){
        ans=-1
    }
    else{
        ans=dp[amount]
    }
    return ans
};
coinChange([1,2,5],100)
// coinChange([2],3)
coinChange([1],0)