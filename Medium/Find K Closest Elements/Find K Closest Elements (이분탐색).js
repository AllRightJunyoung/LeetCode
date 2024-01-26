var findClosestElements = function(arr, k, x) {
    
    let [left,right]=[0,arr.length-k]
    let answer=[]

    // console.log(left,right)

    while(left<right){
        let mid=(left+right)/2
        mid=Math.floor(mid)

        //  0왼쪽 ,4오른쪽 왼쪽이크면 범위를 늘림 
        if(x-arr[mid]>arr[mid+k]-x){
            left=mid+1
        }
        else{
            right=mid
        }
    }

    answer=arr.slice(left,left+k)

    return answer
    
};

findClosestElements([1,2,3,4,5],4,3)
findClosestElements([1,2,3,4,5],4,-1)