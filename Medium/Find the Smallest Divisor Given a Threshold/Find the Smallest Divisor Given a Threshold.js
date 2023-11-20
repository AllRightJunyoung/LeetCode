/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const isValid=(divisor,threshold,nums)=>{
    let sum=0
    for(let i=0;i<nums.length;i++){
        let num=nums[i]
        let d;

        
        d=Math.floor(num/divisor)+(num%divisor>0?1:0)

    

        sum+=d
     
    }
    if(sum>threshold){
        return false
    }
    return true
}

var smallestDivisor = function(nums, threshold) {
    nums.sort((a,b)=>a-b)
    let [left,right]=[nums[0],nums[nums.length-1]]
    let answer=Infinity
    while(left<right){
        let mid=Math.floor((left+right)/2)

        if(isValid(mid,threshold,nums)){
            right=mid
            answer=Math.min(answer,mid)
            console.log(answer)
        }
        else{
            left=mid+1    
        }
    }
    return answer


};

smallestDivisor([1,2,5,9],6)