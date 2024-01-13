/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  
  // endTime이 작은순으로
  intervals.sort((a,b)=>a[1]-b[1])
  let answer=0
  let [startTime,endTime]=intervals[0]

  for(let i=1;i<intervals.length;i++){
    if(intervals[i][0]<endTime){
      answer+=1
    }
    else{
      endTime=intervals[i][1]
    }
  }
  console.log(answer)
  return answer
};

eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])
// eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])
// eraseOverlapIntervals([[1,2],[1,2],[1,2]])
// eraseOverlapIntervals([[1,2],[2,3]])