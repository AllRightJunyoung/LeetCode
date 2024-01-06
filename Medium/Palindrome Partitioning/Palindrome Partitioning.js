/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let answer=[]

    dfs(s,0,[])
    function dfs(s,idx,array){
        if(idx===s.length){
            answer.push([...array])
            return
        }

        for(let i=idx;i<s.length;i++){
            const str=s.substring(idx,i+1)
            if(isValid(str)){
            array.push(str)
            dfs(s,i+1,array)
            array.pop()
            }
        }
    }
    return answer
};
function isValid(a){
    let tmp_a=[...a]
    let tmp_b=[...a].reverse()
    for(let i=0;i<tmp_a.length;i++){
        if(tmp_a[i]!==tmp_b[i]){
            return false
        }
    }
    return true
}

partition("aab")
// partition("a")