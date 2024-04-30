/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let queue=[startGene]
    let cost=new Map()
    cost.set(startGene,0)



    while(queue.length){
        let cur=queue.pop()
        let c=cost.get(cur)
        if(cur===endGene){
            return c
        }

        for(let i=0;i<bank.length;i++){
            if(isValid(cur,bank[i]) && !cost.has(bank[i])){
                cost.set(bank[i],c+1)
                queue.push(bank[i])
            }
        }
    }
    return -1

};
function isValid(cur,target){
    let cnt=0
    for(let i=0;i<cur.length;i++){
        if(cur[i]!==target[i]){
            cnt+=1
        }
    }
    if(cnt===1){
        return true
    }

    return false

}