/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 2차원 배열로 품
var generate = function(numRows) {
    let dp=new Array(32).fill(0)
    for(let i=0;i<=32;i++){
        dp[i]=new Array(31).fill(-1)
    }
    dp[1][0]=1
    dp[2][0]=1
    dp[2][1]=1

    for(let i=3;i<=numRows;i++){
        for(let j=0;j<i;j++){
            if(j==0){
                dp[i][0]=dp[i-1][0]
            }
            else if(j==i-1){
                dp[i][j]=dp[i-1][j-1]
            }
            else{
                dp[i][j]=dp[i-1][j]+dp[i-1][j-1]
            }
        }
    }
    let answer=[]
    for(let i=1;i<=numRows;i++){
        let tmp=[]
        for(let j=0;j<numRows;j++){
            if(dp[i][j]!==-1){
                tmp.push(dp[i][j])
            }
        }
        answer.push([...tmp])
    }
    return answer

};

// generate(3)
generate(5)
// generate(1)