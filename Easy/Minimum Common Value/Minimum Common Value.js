/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let counter=new Map()
    nums1=new Set(nums1)
    nums2=new Set(nums2)
    let nums=[...nums1,...nums2]
    nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length;i++){
        if(!counter.has(nums[i])){
            counter.set(nums[i],1)
        }
        else{
            counter.set(nums[i],counter.get(nums[i])+1)
        }
    }

    counter=[...counter].sort((a,b)=>b[1]-a[1])

    if(counter[0][1]>1){
        return counter[0][0]
    }
    return -1

};



getCommon([1,1,2],[2,4])

// getCommon([1,2,3,6],[2,3,4,5])
// getCommon([1,2,3],[2,4])
