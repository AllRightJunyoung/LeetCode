/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {

  
  let left=0
  let windowMax=0
  let sum=0
  // grumpy값이 1일때 가장 큰 windowSize
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
  // 
  let total=0
  for(let i=0;i<customers.length;i++){
    if(grumpy[i]===0){
      total+=customers[i]
    }
  }
  let answer=windowMax+total
  return answer
};


maxSatisfied([3],[1],1)

maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3)
maxSatisfied([1],[0],1)