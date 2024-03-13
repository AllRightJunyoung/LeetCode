/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  const prefixSum=new Array(n+1).fill(0)
  prefixSum[1]=1
  for(let i=2;i<=n;i++){
    prefixSum[i]=prefixSum[i-1]+i
  }
  let answer=-1
  for(let i=1;i<=n;i++){
    if(prefixSum[n]-prefixSum[i-1]===prefixSum[i]){
        answer=i
    }
  }
  return answer

};

pivotInteger(8)
pivotInteger(1)
pivotInteger(4)