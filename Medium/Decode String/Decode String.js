/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    s=s.split("")
    let visited=new Array(s.length).fill(false)
    let number=""
    let newWord=[]
    // 숫자 파싱
    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i])){
            number+=s[i]
        }
        else{
            if(number.length){
                newWord.push(Number(number))
                number=""
            }

            newWord.push(s[i])
        }
    }
    let answer=solve(newWord,0,visited,0)
    return answer
};
function solve(string,depth,visited,idx){
    if(depth===string.length){
        return ""
    }


    
    let number=1;
    let alpha=[]

    for(let i=idx;i<string.length;i++){
        const s=string[i]
        if(!visited[i]){
            visited[i]=true
            if(!isNaN(s)){
                number=s
            }
            else if(s==='['){
                let word=solve(string,depth+1,visited,i)
                word=word.repeat(number)
                alpha.push(word)
            }
            else if(s===']'){
                return alpha.join("")
            }
            else{
                alpha.push(s)
            }
        }
    }
    return alpha.join("")
}

decodeString("100[leetcode]")
decodeString("abc3[cd]xyz")
decodeString("3[a]2[bc]")
decodeString("3[a2[c]]")
decodeString("2[abc]3[cd]ef")