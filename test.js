/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    
    let prefixSum=new Array(1002).fill(0)
    let maxEnd=-Infinity
    trips.sort((a,b)=>a[2]-b[2])
    for(let i=0;i<trips.length;i++){
        const [people,start,end]=trips[i]
        prefixSum[start]+=people // 출발지점에 탑승
        prefixSum[end]-=people //도착지점에 내림
        maxEnd=Math.max(maxEnd,end)
    }

    
    for(let time=1;time<=maxEnd;time++){
        prefixSum[time]=prefixSum[time]+prefixSum[time-1]
    }
    for(let i=0;i<=maxEnd;i++){
        if(prefixSum[i]>capacity){
            return false
        }
    }
    return true
 
};

// carPooling([[7,5,6],[6,7,8],[10,1,6]],16) //false
// carPooling([[2,1,5],[3,5,7]],3) 
// console.log(carPooling([[2,1,5],[3,3,7]],4))//false
console.log(carPooling([[2,1,5],[3,3,7]],5))