// 다시생각해보기 

/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function(nums) {

    let postive=1
    let negative=1
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){// 양수일떄
            postive=negative+1
        }
        else if(nums[i]<nums[i-1]){ //음수일떄
            negative=postive+1
        }
    }
    let answer=Math.max(postive,negative)
    return answer


   
};

// wiggleMaxLength([1,2,3,4,5,6,7,8,9])
// wiggleMaxLength([1,7,4,9,2,5])
wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])