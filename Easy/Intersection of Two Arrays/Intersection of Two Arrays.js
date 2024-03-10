/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let answer=nums1.filter((num)=>nums2.includes(num))
    answer=new Set(answer)
    answer=[...answer]
    return answer
    
};

intersection([1,2,2,1],[2,2])