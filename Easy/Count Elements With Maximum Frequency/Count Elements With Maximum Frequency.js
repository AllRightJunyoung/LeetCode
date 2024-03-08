/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map=new Map()
    let maxFrequecny=0

    for(let i=0;i<nums.length;i++){
        let num=nums[i]
        if(!map.has(num)){
            map.set(num,1)
        }
        else{
            map.set(num,map.get(num)+1)
        }
        maxFrequecny=Math.max(maxFrequecny,map.get(num))
    }
    map=[...map].sort((a,b)=>b[1]-a[1])

    let answer=0
    for(let i=0;i<map.length;i++){
        const [number,cnt]=map[i]
        if(cnt===maxFrequecny){
            answer+=cnt
        }
    }
    return answer

};

// maxFrequencyElements([1,2,2,3,1,4])

maxFrequencyElements([1,2,3,4,5])