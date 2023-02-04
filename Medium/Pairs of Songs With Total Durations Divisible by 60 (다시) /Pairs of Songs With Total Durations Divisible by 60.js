/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let cnts=new Array(60).fill(0)
    let answer=0
    for(let i=0;i<time.length;i++){
        let mod=Math.floor(time[i]%60)
        
        if(mod===0){
            answer+=cnts[0]
        }
        else{
            answer+=cnts[60-mod]
        }
        cnts[mod]+=1
    }
    return answer
    
};
numPairsDivisibleBy60([30,20,150,100,40])

numPairsDivisibleBy60([60,60,60])