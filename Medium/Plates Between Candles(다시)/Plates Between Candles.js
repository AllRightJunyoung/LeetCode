/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
    let candles=[]
    let answer=[]
    // 양초의 위치를 넣음 
    for(let i=0;i<s.length;i++){
        if(s[i]==='|'){
            candles.push(i)
        }
    }

    for(let i=0;i<queries.length;i++){
        const [start,end]=queries[i]
        // 양초의 위치를 찾는다.
        const l=lowerBound(candles,0,candles.length,start)
        const r=upperBound(candles,0,candles.length,end)-1
        
        if(l<r){
            let totalItem=candles[r]-candles[l]+1 //양초를 포함한 모든 아이템
            let candle=r-l+1 // 해당 범위에 들어있는 양초 
            answer.push(totalItem-candle)

        }
        else{
            answer.push(0)
        }

    }
    return answer
};

// target보다 작거나 같은 원소 위치를 찾는다
function lowerBound(array,left,right,target){
    while(left<right){
        const mid=Math.floor((left+right)/2)
        if(target<=array[mid]){
            right=mid
        }
        else{
            left=mid+1
        }
    }
    return right

}
// target보다 큰 원소의 위치를 찾는다.
function upperBound(array,left,right,target){
    while(left<right){
        let mid=(left+right)/2
        mid=Math.floor(mid)
        if(target<array[mid]){
            right=mid
        }
        else{
            left=mid+1
        }
    }
    return right
}
platesBetweenCandles("**|**|***|",[[2,5],[5,9]])
platesBetweenCandles("***|**|*****|**||**|*",[[1,17],[4,5],[14,17],[5,11],[15,16]])