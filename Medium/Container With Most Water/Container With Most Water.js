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
    
    // left+=1하는 이유는 현재 height[left]의 최대 area가 나올수밖에없음
    if(height[left]<height[right]){
        area=width*height[left]
        left+=1
    }
    else{ // right-=1도 마찬가지
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