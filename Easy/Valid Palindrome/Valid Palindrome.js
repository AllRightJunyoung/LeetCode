/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=[...s]
    let string=[]
    for(let i=0;i<s.length;i++){
        let alpha=s[i].toLowerCase()
        let ascii_code=alpha.charCodeAt(0)-97
        
        if((ascii_code>=0 && ascii_code<26)){
            string.push(alpha)
        }
        else if(!isNaN(s[i]) && s[i] !==' '){
            string.push(s[i])

        }
    }
    if(!string.length)return true
    for(let i=0;i<string.length/2;i++){
        if(string[i]!==string[string.length-1-i]){
            return false
        }
    }
    return true
};
