/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// 정렬된 요소중에 배열에서 x에 가장 가까운 정수 k개를 반환
var findClosestElements = function(arr, k, x) {
    let tmp=[]
    for(let i=0;i<arr.length;i++){
        let number=arr[i]
        tmp.push([i,Math.abs(number-x)])
    }

    tmp.sort((a,b)=>a[1]-b[1])
    let cnt=0
    let answer=[]
    while(cnt!==k){
        const [idx,n]=tmp[cnt]
        answer.push(arr[idx])
        cnt+=1
    }

    answer=[...answer].sort((a,b)=>a-b)
 
    return answer
    
};
