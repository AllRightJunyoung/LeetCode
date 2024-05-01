const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// 배열값이 0인곳에 도착할수있는지 확인하는 문제

var canReach = function(arr, start) {
    let queue=[]
    let visited=new Array(arr.length).fill(false)
    queue.push(start)
    visited[start]=true

    while(queue.length){
        let current=queue.shift()
        let dist=arr[current]
        if(dist===0){
            return true
        }
        let m=dist*-1
        let p=dist
        if(current+m>=0 && !visited[current+m]){
            visited[current+m]=true
            queue.push(current+m)
        }
        if(current+p<arr.length && !visited[current+p]){
            visited[current+p]=true
            queue.push(current+p)
        }


    }
    return false
};

// canReach([4,2,3,0,3,1,2],5)
// canReach([4,2,3,0,3,1,2],0)
// canReach([3,0,2,1,2],2)

console.log(canReach([0,1],1))