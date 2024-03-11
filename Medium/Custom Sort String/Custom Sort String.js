/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let rank=new Map()
    for(let i=0;i<order.length;i++){
        rank.set(order[i],i+1)
    }
    let list=[]
    for(let i=0;i<s.length;i++){
        let str=s[i]
        if(rank.has(str)){
            list.push([str,rank.get(str)])
        }
        else{
            list.push([str,Infinity])
        }
    }

    list.sort((a,b)=>a[1]-b[1])
    let answer=""
    for(let i=0;i<list.length;i++){
        answer+=list[i][0]
    } 
    return answer
};

customSortString("cba","abcd")

customSortString("bcafg","abcd")