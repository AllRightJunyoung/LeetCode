/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let answer=dfs(n,[])
    for(let i=0;i<answer.length;i++){
        answer[i]=parseInt(answer[i],2)
    }
    return answer
};
function dfs(n,array){
    if(n==1){
        array.push('0')
        array.push('1')
        return array
    }
    else{
        let result=dfs(n-1,array)
        let newArray=[]
        for(let i=0;i<result.length;i++){
            newArray.push('0'+result[i])
        }
        for(let i=result.length-1;i>=0;i--){
            newArray.push('1'+result[i])
        }
        return newArray
    }

}

// grayCode(4)
grayCode(3)
// grayCode(2)
// grayCode(1)