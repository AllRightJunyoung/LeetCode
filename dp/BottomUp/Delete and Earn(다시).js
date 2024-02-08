/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let map=new Map()
    let maxValue=Math.max(...nums)
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],nums[i])
        }
        else{
            map.set(nums[i],map.get(nums[i])+nums[i])
        }
    }  
    let dp=new Array(maxValue+1).fill(0)

    if(map.has(1)){
        dp[1]=map.get(1)
    }
    for(let i=2;i<=maxValue;i++){
        dp[i]=dp[i-1]
        if(map.has(i)){
            dp[i]=Math.max(dp[i],dp[i-2]+map.get(i))        
        }
    }

    
    let answer=dp[maxValue]
    return answer
};
