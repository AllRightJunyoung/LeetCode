/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

var equalSubstring = function(s, t, maxCost) {
    let [left,right]=[0,0]
    let cost=0

    while(right<s.length){
        cost+=Math.abs(s.charCodeAt(right)-t.charCodeAt(right))
        if(cost>maxCost){
            cost-=Math.abs(s.charCodeAt(left)-t.charCodeAt(left))
            left+=1
        }
        right+=1
    }
    answer=right-left



    return answer
};



// equalSubstring("abcd","bcdf",3) //3
// equalSubstring("abcd","cdef",3) // 1
// equalSubstring("abcd","acde",0)// 1
equalSubstring("krrgw","zjxss",19) // 2

equalSubstring("thjdoffka","qhrnlntls",11) //3
equalSubstring("anryddgaqpjdw","zjhotgdlmadcf",5)