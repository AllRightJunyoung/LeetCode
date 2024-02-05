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

    // 두 양초 사이의 별개수를 구해야함
    for(let i=0;i<queries.length;i++){
        const [start,end]=queries[i]
        // start보다 크거나 같은 양초의 인덱스를 찾는다 (크거나 같아도 같은범위)
        let s=lowerBound(candles,0,candles.length,start)
        // end보다 작거나 같은 양초의 인덱스를 찾는다
        let e=upperBound(candles,0,candles.length,end)-1
        if(s<e){
            const totalAmount=candles[e]-candles[s] // 양초랑 * 포함해서 총길이
            const totalCanldes=e-s // 양초 개수     
            answer.push(totalAmount-totalCanldes)
        }
        else{
            answer.push(0)
        }
    }
    return answer


};

// target보다 크거나 같은 원소 위치
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


