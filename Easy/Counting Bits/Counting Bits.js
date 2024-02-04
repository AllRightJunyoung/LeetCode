/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let cache=new Array(10001).fill(0)
    cache[1]=1
    cache[2]=1
    cache[3]=2
    let answer=[]


    for(let i=4;i<=n;i++){
        cache[i]=cache[i%4]+cache[Math.floor(i/4)]
    }
    for(let i=0;i<=n;i++){
        answer.push(cache[i])
    }
    return answer
};
