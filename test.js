/**
 * @param {number[]} nums
 * @return {number}
 */

//https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/?envType=daily-question&envId=2024-02-15
var largestPerimeter = function(nums) {

    if(nums.length<3){
        return -1
    }

    nums.sort((a,b)=>a-b)
    let prefix=new Array(nums.length).fill(0)
    prefix[0]=nums[0]
    for(let i=1;i<nums.length;i++){
        prefix[i]=prefix[i-1]+nums[i]
    }
    let [left,right]=[0,1]



    let answer=-1
    let total=prefix[right]
    while(left<right){
        if(total>nums[right]){
            answer=Math.max(answer,total)
            total+=nums[right]
            right+=1            
        }
        else{
            total-=nums[left]
            left+=1            
        }


    }

    return answer


};

// largestPerimeter([5,5,5])
// largestPerimeter([1,12,1,2,5,50,3])
largestPerimeter([5,5,50])