/**
 * @param {number[]} height
 * @return {number}
 */

// 그리디 문제
var maxArea = function(height) {
   
  let [left,right]=[0,height.length-1]
  let answer=-Infinity
  while(left<right){
    let width=Math.abs(right-left)
    let area;
    if(height[left]<height[right]){
        area=width*height[left]
        left+=1
    }
    else{
        area=width*height[right]
        right-=1
    }
    answer=Math.max(answer,area)
    }

  return answer

};

maxArea([1,2]) //1
maxArea([1,2,1]) //2
maxArea([1,1]) //1
maxArea([1,8,6,2,5,4,8,3,7]) //49