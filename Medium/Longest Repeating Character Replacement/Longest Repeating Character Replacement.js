/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let obj={}
    let maxAlpha=0
    let left=0
    let answer=0
    for(let right=0;right<s.length;right++){
        if(!obj[s[right]]){
            obj[s[right]]=1
        }
        else{
            obj[s[right]]+=1
        }
        maxAlpha=Math.max(maxAlpha,obj[s[right]])
        let windowSize=(right-left+1)-maxAlpha
        if(windowSize>k){
            obj[s[left]]-=1
            left+=1
        }
        answer=Math.max(right-left+1,answer)
        
    }
    return answer
    
};

characterReplacement("AABABBA",1)