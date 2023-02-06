/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map()
    for(let i=0;i<strs.length;i++){
        let str=strs[i].split('').sort().join('')

        if(!map.has(str)){
            map.set(str,[strs[i]])
        }
        else{
            let strList=map.get(str)
            strList.push(strs[i])
            map.set(str,strList)
        }
    }
    let answer=[...map.values()]
    return answer

};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])
groupAnagrams([""])
groupAnagrams(["a"])