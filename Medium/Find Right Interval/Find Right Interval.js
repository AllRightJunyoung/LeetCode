/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let newIntervals=[]
    let answer=[]
    for(let i=0;i<intervals.length;i++){
        const [start,end]=intervals[i]
        newIntervals.push([start,end,i])
    }
    let sortedIntervals=[...newIntervals].sort((a,b)=>a[0]-b[0])

    for(let i=0;i<intervals.length;i++){
        const [start,end]=intervals[i]
        const index=upperBound(sortedIntervals,0,sortedIntervals.length,start,end)


        // 현재 위치랑 끝나는 위치 같으면 자기자신 (예외케이스)
        if(start===end){
            answer.push(i)
            continue
        }


        if(index>=intervals.length){
            answer.push(-1)
        }
        else{
            answer.push(sortedIntervals[index][2])
        }

       
        
    }
    return answer
     

};

// target보다 큰 원소가 나오는 위치
function upperBound(array,left,right,targetLeft,targetRight){
    while(left<right){
        let mid=(left+right)/2
        mid=Math.floor(mid)
        if(targetLeft<array[mid][1] && targetRight<=array[mid][0]){
            right=mid
        }
        else{
            left=mid+1
        }
    }
    return right
}

