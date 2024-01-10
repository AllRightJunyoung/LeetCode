/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[1]-b[1])
    let arrowEnd=-1
    let answer=0

    for(let i=0;i<points.length;i++){
        const [start,end]=points[i]
        if(arrowEnd===-1){
            arrowEnd=end
            answer+=1
            continue
        }
        if(start<=arrowEnd && end>=arrowEnd)continue
        
        arrowEnd=end
        answer+=1

    }

    return answer

};

findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])
findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])
findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])