/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let postive=0
    let negative=1

    let answer=new Array(nums.length).fill(0)

    for(let i=0;i<nums.length;i++){
        let number=nums[i]
        if(number>0){
            answer[postive]=number
            postive+=2
        }
        else{
            answer[negative]=number
            negative+=2
        }

    }

    return answer
};

rearrangeArray([3,1,-2,-5,2,-4])
// rearrangeArray([-1,1])