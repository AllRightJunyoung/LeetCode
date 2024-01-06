/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {

    let answer=0
    let visited=new Array(n+1).fill(0)
    dfs([],1)
    function dfs(array,curNumber){
        if(curNumber>=n+1){
            answer+=1
            return
        }

        for(let i=1;i<=n;i++){
            if(!visited[i] && isValid(curNumber,i)){
                visited[i]=curNumber
                dfs(array,curNumber+1)
                array.pop()
                visited[i]=0
            }
        }

    }
    return answer
    
};
function isValid(number,index){
    if(number%index===0 || index%number===0){
        return true
    }
    return false
}