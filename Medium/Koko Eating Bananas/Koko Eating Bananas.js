/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    let left=0
    let right=Math.max(...piles)

    // 경비원이오는 h시간 내로 최소 k를 구해라  (한시간당 먹을수있는 최소 바나나 더미)

    while(left<right){
        let k=(left+right)/2
        k=Math.floor(k)
        if(isValid(k,h,piles)){
            right=k
        }
        else{
            left=k+1
        }
    }
    
    return right
};

// 이 함수를 통해 이분탐색으로 정한 k값이 경비원이 도달하기까지 걸리는 시간내로 모든 바나나 더미를 먹을수있는지 확인
// 즉 [3,6,7,11] 일떄 k가 5면 [1,2,2,3] 8이 걸리므로 5도가능 , 
function isValid(k,h,piles){
    let myHour=0
    for(let i=0;i<piles.length;i++){
        const pile=piles[i]
        
        let targetHour=Math.floor(pile/k)
        if(targetHour){
            if(pile%k!==0){
                targetHour+=1
            }
        }
        else{
            targetHour=1
        }
        myHour+=targetHour


    }
    return myHour<=h ? true :false

}