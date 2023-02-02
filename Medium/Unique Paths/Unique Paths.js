/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 로봇이 목적지까지 도달할수있는 모든 unique 경로 수
// 로봇은 오른쪽이나 아래로만 갈수있음
// dp[i][j] = i,j까지 갈수있는 경로의수
var uniquePaths = function(m, n) {
    const dp=Array.from(new Array(m),()=>new Array(n).fill(0))

    for(let col=0;col<n;col++){
        dp[0][col]=1
    }
    for(let i=1;i<m;i++){
        for(let j=0;j<n;j++){
            // 위에서 아래로
            if(j==0){
                dp[i][j]+=dp[i-1][j]
            }
            else{
            if(i-1>=0) {
                dp[i][j]+=dp[i-1][j]
            }
              // 왼쪽에서 오른쪽으로
            if(j-1>=0){
                dp[i][j]+=dp[i][j-1]
            }
            }
          
        }
    }

    console.log(dp[m-1][n-1])
};

uniquePaths(3,7)