/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a,b)=>a-b) 

  let prefixSum=new Array(nums.length).fill(0)
  prefixSum[0]=nums[0]
  for(let i=1;i<nums.length;i++){
    prefixSum[i]=nums[i]+prefixSum[i-1]
  }

  let answer=-1
  let [left,right]=[0,2]


  while(right<nums.length){
    if(prefixSum[right]-nums[right]>nums[right]){
        answer=prefixSum[right]
    }
    right+=1

  }
  return answer

};

// largestPerimeter([5,5,5])
// largestPerimeter([1,12,1,2,5,50,3])
largestPerimeter([5,5,50])