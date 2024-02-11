/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let up=new Array(rating.length).fill(0)
    let down=new Array(rating.length).fill(0)
    let count=0
    for(let i=0;i<rating.length;i++){
        for(let j=i;j>=0;j--){
            if(rating[i]>rating[j]){
                up[i]+=1 // 현재 숫자보다 작은거 
                count+=up[j]
            }
            if(rating[i]<rating[j]){
                down[i]+=1
                count+=down[j]
            }
        }
    }

    console.log(down,up)

};

numTeams([2,5,3,4,1])