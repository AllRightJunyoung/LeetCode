/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {

    // grumpy값이 1이 포함된 windowSize중 가장 큰값을 먼저구함
    let left=0
    let windowMax=0
    let sum=0
    for(let right=0;right<customers.length;right++){
      if(grumpy[right]===1){
        sum+=customers[right]
      }
      if(right-left+1===minutes){
        windowMax=Math.max(windowMax,sum)
        if(grumpy[left]===1){
          sum-=customers[left]
        }
        left+=1
      }
    }

    let answer=windowMax
    for(let i=0;i<customers.length;i++){
      if(grumpy[i]===0){
        answer+=customers[i]
      }
    }
    return answer
  };
  