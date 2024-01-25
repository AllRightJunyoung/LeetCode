/**
 * @param {number[]} asteroids
 * @return {number[]}
 */


var asteroidCollision = function(asteroids) {
   
   let stack=[]
   for(let i=0;i<asteroids.length;i++){
      stack.push(asteroids[i])
      while(stack.length>1){
         let a=stack[stack.length-1]
         let b=stack[stack.length-2]
         if((a>0 && b>0)|| (a<0 && b<0))break // 같은 방향
         if(b<0 && a>0)break // <- -> 다른방향 

         // -> <- 가능

         let c=Math.abs(a)
         let d=Math.abs(b)

         if(c==d){ // 가중치같으면 둘다 폭발
            stack.pop()
            stack.pop()
         }
         else{ //아닐경우
            if(c<d){ // 가장위에꼐 작으면 사라짐
               stack.pop()
            }
            else{ // 가장위에꼐 크면 두번쨰꺼 지움
               stack.pop()
               stack.pop()
               stack.push(a)
            }
         }
         }
   }
   return stack
};
