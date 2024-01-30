/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack=[]
    let answer=new Array(temperatures.length).fill(0)
    
    for(let i=0;i<temperatures.length;i++){
        
        // stack의 맨꼭대기에 있는 온도 (이전에 넣었던거)가 현재 온도보다 작은경우
        while(stack.length && temperatures[stack[stack.length-1]]<temperatures[i]){
            const top=stack.pop()
            answer[top]=i-top
        }
        stack.push(i)
    }
    while(stack.length){
        const top=stack.pop()
        answer[top]=0
    }
    return answer
    
};
dailyTemperatures([73,74,75,71,69,72,76,73])