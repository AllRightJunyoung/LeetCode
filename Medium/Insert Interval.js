/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let answer=[]
    intervals.push([newInterval[0],newInterval[1]])
    intervals.sort((a,b)=>a[0]-b[0])
    
    let idx=0
    for(let i=1;i<intervals.length;i++){
        // 저장된 인덱스의 끝점 갱신
        if(intervals[idx][1]>=intervals[i][0]){
            intervals[idx][1]=Math.max(intervals[idx][1],intervals[i][1])
        }
        else{
            idx+=1
            intervals[idx]=intervals[i]
        }
    }
    for(let i=0;i<=idx;i++){
        const [s,e]=intervals[i]
        answer.push([s,e])
    }
    return answer
};

// insert([[1,5]],[1,7])
insert([[1,3],[6,9]],[2,5]) //[[1,5],[6,9]]
insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]) // [[1,2],[3,10],[12,16]]
console.log(insert([[1,5]],[1,7])) // 