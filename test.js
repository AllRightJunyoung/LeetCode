/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left=0
    let right=weights.reduce((acc,value)=>acc+value,0)
    let answer=Infinity
    
    while (left<=right) {
        let mid=(left+right)/2
        mid=Math.floor(mid)
        if(isValid(weights,mid,days)){
            right=mid-1
            answer=Math.min(answer,mid)
        }
        else{
            left=mid+1
        }
    }
    return answer
};
function isValid(weights,capacity,days){
    let array=[]
    let sum=0
    for(let i=0;i<weights.length;i++){
        const w=weights[i]
        if(w>capacity){
            return false
        }
        sum+=w
        if(sum>capacity){
            array.push(sum-w)
            sum=w
        }
    }
    
    if(array.length+1>days){
        return false
    }
    return true

}


// 
shipWithinDays([1,2,3,4,5,6,7,8,9,10],5)
shipWithinDays([3,2,2,4,1,4],3)
shipWithinDays([1,2,3,1,1],4)