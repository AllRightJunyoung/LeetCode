/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map=new Map()
    let answer=[]
    for(let i=0;i<nums.length;i++){
       let number=nums[i]
       if(!map.has(number)){
        map.set(number,1)
       }
       else{
        map.set(number,map.get(number)+1)
       }
    }
    for(let i=1;i<=nums.length;i++){
       if(map.get(i)>1){
        answer.push(i)
       } // 중복숫자
    }
    for(let i=1;i<=nums.length;i++){
        if(!map.has(i)){
         answer.push(i)
        } // 누락숫자
     }
    return answer
};

findErrorNums([2,2])
findErrorNums([3,2,2]) // 2,1
findErrorNums([1,2,2,4]) // 2,3
findErrorNums([1,1]) // 1,2