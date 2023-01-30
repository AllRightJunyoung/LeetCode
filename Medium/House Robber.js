/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp=new Array(101).fill(0)
    let answer=-Infinity
    dp[0]=nums[0]

    for(let i=0;i<nums.length;i++){
        if(i===0 || i===1){
            dp[i]=nums[i]
        }
        else if(i===2){
            dp[i]=dp[i-2]+nums[i]
        }
        else{
            dp[i]=Math.max(dp[i-2]+nums[i],dp[i-3]+nums[i])
        }
        answer=Math.max(dp[i],answer)
    }
    return answer
    
};

rob([2,1,1,2])

rob([1,2,3,1])
rob([2,7,9,3,1])
