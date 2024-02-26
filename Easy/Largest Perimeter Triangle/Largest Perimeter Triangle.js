/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>a-b)
    
    let answer=0
    for(let i=0;i<nums.length-2;i++){
        let [a,b,c]=[nums[i],nums[i+1],nums[i+2]]
        if(a+b>c){
            answer=a+b+c
        }

    }
    return answer
    
};

largestPerimeter([2,1,2])
largestPerimeter([1,2,1,10])