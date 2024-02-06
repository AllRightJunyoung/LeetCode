/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let postive=new Array(nums.length).fill(0)
    let negative=new Array(nums.length).fill(0)


    postive[0]=1
    negative[0]=1

    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
           if(nums[j]<nums[j+1]){ // 양수 
            postive[j]=Math.max(negative[j]+1,postive[j])
           }
           else if(nums[j]>nums[j+1]){
            negative[j]=Math.max(postive[j]+1,negative[j])
           }
        
        }
    }
    console.log(postive,negative)
    
};

wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])