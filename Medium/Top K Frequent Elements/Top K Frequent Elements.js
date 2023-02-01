/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map=new Map()
    let answer=[]
    for(let i=0;i<nums.length;i++){
        const num=nums[i]
        if(!map.has(num)){
            map.set(num,1)
        }
        else{
            map.set(num,map.get(num)+1)
        }
    }

    let sorted_number=[...map].sort((a,b)=>b[1]-a[1])
    
    for(let i=0;i<sorted_number.length;i++){
        if(answer.length>=k){
            break
        }
        answer.push(sorted_number[i][0])
    }
    return answer

};

topKFrequent([1,1,1,2,2,3],2)
topKFrequent([1],1)
