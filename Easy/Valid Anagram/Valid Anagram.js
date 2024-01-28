/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s=[...s].sort()
    t=[...t].sort()
    
    if(s.length!==t.length){
        return false
    }

    for(let i=0;i<s.length;i++){
        if(t[i]!=s[i]){
            return false
        }
    }
    return true
};

isAnagram("anagram", "nagaram")
isAnagram("rat","car")