/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    
    let [left,right]=[0,0]
    let total=0
    let answer=Infinity

   
    while(right<nums.length){
        if(nums[right]+total<target){
            total+=nums[right]
            right+=1
        }
        else{
            // 큰경우 범위를 좁힌다.
            answer=Math.min(answer,right-left+1)
            total-=nums[left]
            left+=1
        }
    }
    return answer===Infinity ?  0: answer
}

// minSubArrayLen(11,[1,2,3,4,5]) //3
minSubArrayLen(7,[2,3,1,2,4,3])
// minSubArrayLen(4,[1,4,4])
// minSubArrayLen(11,[1,1,1,1,1,1,1,1])