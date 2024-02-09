/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp=new Array(366).fill(Infinity)
    let maxDay=Math.max(...days)
    dp[0]=0
  
    for(let i=0;i<days.length;i++){
      const day=days[i]
      for(let j=1;j<=day;j++){
        if(!days.includes(j)){
          dp[j]=dp[j-1] // 현재 포함되지 않은 날짜는 이전 비용
          continue
        }
        else{
          dp[j]=Math.min(dp[j],dp[Math.max(0,j-1)]+costs[0])
          dp[j]=Math.min(dp[j],dp[Math.max(0,j-7)]+costs[1])
          dp[j]=Math.min(dp[j],dp[Math.max(0,j-30)]+costs[2])
        }
      }
    }
    let answer=dp[maxDay]
    return answer
  
  
  };
  
  // mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31],[2,7,15]) //17
  mincostTickets([1,4,6,7,8,20],[2,7,15]) //11
  
  // mincostTickets([1,4,6,7,8,20],[7,2,15]) //6
  
  mincostTickets([1,5,8,9,10,12,13,16,17,18,19,20,23,24,29], [3,12,54]) //39