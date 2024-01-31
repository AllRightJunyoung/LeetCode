// fail 

// 테케 22/37까지 통과

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

var equalSubstring = function(s, t, maxCost) {
    let [left,right]=[0,maxCost]
    let answer=0
    while(left<=right){
        let mid=left+right
        mid=Math.floor(mid/2)
        let result=calculate(s,t,mid,maxCost)
        if(result>=answer){
            left=mid+1
        }
        else{
            right=mid-1
        }
        answer=Math.max(answer,result)

    }
    console.log(answer)
    return answer
};

const calculate=(s,t,cost,maxCost)=>{
    let cnt=0
    let myCost=0
    for(let i=0;i<s.length;i++){
        const diff=Math.abs(s.charCodeAt(i)-t.charCodeAt(i))
        if(myCost+diff>maxCost){
            continue
        }

        if(cost>=diff){
            cnt+=1
            myCost+=diff
        }
    }
    return cnt
}

equalSubstring("anryddgaqpjdw","zjhotgdlmadcf",5)