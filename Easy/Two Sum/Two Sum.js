/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map=new Map()
   for(let i=0;i<nums.length;i++){
        map.set(nums[i],i)
   }

   let answer=[]
   for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            if(map.get(target-nums[i])===i) continue
            answer.push(i)
            answer.push(map.get(target-nums[i]))
        }
   }
   answer.sort((a,b)=>a-b)
   return answer
};

twoSum([2,7,11,15],9)
twoSum([3,2,4],6)
twoSum([3,3],6)