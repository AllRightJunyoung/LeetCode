const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
let queue=[]
var updateMatrix = function(mat) {

    let dist=new Array(mat.length)
    for(let i=0;i<mat.length;i++){
        dist[i]=new Array(mat[0].length).fill(0)
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]===1 && check(i,j,mat)){
               queue.push([i,j])
                dist[i][j]=1
            }
        }
    }
    while(queue.length){
        const[c_x,c_y]=queue.shift()
        for(let i=0;i<4;i++){
            let [nx,ny]=[dx[i]+c_x,dy[i]+c_y]
            if(nx<0 || ny<0 || nx>=mat.length || ny>=mat[0].length)continue
            if(mat[nx][ny]===1 ){
                if(dist[c_x][c_y]+1<dist[nx][ny] || dist[nx][ny]===0){
                    dist[nx][ny]=dist[c_x][c_y]+1
                    queue.push([nx,ny])
                }
            }
        }
    }
    return dist

};

const check=(curX,curY,mat)=>{

    for(let i=0;i<4;i++){
        let [nx,ny]=[dx[i]+curX,dy[i]+curY]
        if(nx<0 || ny<0 || nx>=mat.length || ny>=mat[0].length)continue
        if(mat[nx][ny]===0){
            return true
        }
    }
    return false

}

// updateMatrix([[0,0,0],[0,1,0],[0,0,0]])
updateMatrix([[0,0,0],[0,1,0],[1,1,1]])