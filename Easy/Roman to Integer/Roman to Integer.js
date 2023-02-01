/**
 * @param {string} s
 * @return {number}
 */
const init=(alphaList)=>{
    alphaList.set('I',1)
    alphaList.set('V',5)
    alphaList.set('X',10)
    alphaList.set('L',50)
    alphaList.set('C',100)
    alphaList.set('D',500)
    alphaList.set('M',1000)
}
var romanToInt = function(s) {
    const alphaList=new Map()
    let answer=0
    init(alphaList)
    let idx=0
    while(idx<s.length){
        let [front,back]=[alphaList.get(s[idx]),alphaList.get(s[idx+1])]
        if(front<back){
            answer+=back-front
            idx+=2
        }
        else{
            answer+=front
            idx+=1
        }
    }
    return answer

};
romanToInt("III")
romanToInt("LVIII")
romanToInt("MCMXCIV")
