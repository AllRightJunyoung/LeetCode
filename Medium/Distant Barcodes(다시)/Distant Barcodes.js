/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    let map=new Map()
    let answer=new Array(barcodes.length).fill(0)


    // map으로 counting
    for(let i=0;i<barcodes.length;i++){
        const b=barcodes[i]
        if(!map.has(b)){
            map.set(b,1)
        }
        else{
            map.set(b,map.get(b)+1)
        }
    }
    let idx=0
    map=[...map].sort((a,b)=>b[1]-a[1])
    for(let i=0;i<map.length;i++){
        const [number,cnt]=map[i]
        let c=0
       
        while(c<cnt){
            if(idx>=barcodes.length){
                idx=1
            }
            answer[idx]=number
            idx+=2
            c+=1
        }
    }
    return answer
};

rearrangeBarcodes([7,7,7,8,5,7,5,5,5,8])
// rearrangeBarcodes([7,7,7,8,5,7,5,5,5,8])

// rearrangeBarcodes([1,1,1,2,2,2])
rearrangeBarcodes([1,1,1,1,2,2,3,3])