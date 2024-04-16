/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let result = 0;
    let prefixSum = 0;
    const map = new Map();
    map.set(0, 1);
    for (const num of nums) {
        prefixSum += num;
        result += map.get(prefixSum - goal) || 0;
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return result;
};

numSubarraysWithSum([1,0,1,0,1],2)
numSubarraysWithSum([0,0,0,0,0,0],0)