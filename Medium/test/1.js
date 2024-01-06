/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let obj={
        "T":0,
        "F":0
    }
    let [left,maxAlpha]=[0,0]
    answer=0
    for(let right=0;right<answerKey.length;right++){
        obj[answerKey[right]]+=1

        maxAlpha=Math.max(obj[answerKey[right]],maxAlpha)
        if(right-left+1-maxAlpha>k){ // 중복된 가장 큰수는 윈도우에서 제거가능
            obj[answerKey[left]]-=1
            left+=1
            answer=Math.max(answer,right-left+1)
        }
        else{
            answer=Math.max(answer,right-left+1)
        }
    }
    return answer
};

maxConsecutiveAnswers("TTFF",2)

maxConsecutiveAnswers("TFFT",1)