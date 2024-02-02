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
        // 현재 쿼리의 start와 end와 가까운 양초의 위치를 찾는다.
        const l=lowerBound(candles,0,candles.length,start)
        const r=upperBound(candles,0,candles.length,end)-1
        
        if(l<r){
            let totalItem=candles[r]-candles[l]+1
            let candle=r-l+1
            answer.push(totalItem-candle)

        }
        else{
            answer.push(0)
        }

    }
    return answer
};

// target보다 작거나 같은 원소 위치
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
// target보다 큰 가장  원소 
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

// platesBetweenCandles("**|**|***|",[[2,5],[5,9]])
platesBetweenCandles("***|**|*****|**||**|*",[[1,17],[4,5],[14,17],[5,11],[15,16]])