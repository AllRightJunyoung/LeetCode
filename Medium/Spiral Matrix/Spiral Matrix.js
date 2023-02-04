/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   // 오른쪽 아래 왼쪽 위 
   let answer=[]
   const [row,col]=[matrix.length,matrix[0].length]
   const visited=Array.from(new Array(row),()=>new Array(col).fill(false))
   const dx=[0,1,0,-1]
   const dy=[1,0,-1,0]  


   let [cur_x,cur_y]=[0,0]
   visited[cur_x][cur_y]=true
   answer.push(matrix[cur_x][cur_y])
   let dir=0
   while(answer.length!==row*col){
        while(true){
        let [nx,ny]=[dx[dir]+cur_x,dy[dir]+cur_y]
        if(nx<0 || ny<0 || nx>=row || ny>=col)break
        if(visited[nx][ny])break
        visited[nx][ny]=true
        answer.push(matrix[nx][ny])
        cur_x=nx
        cur_y=ny
        }
        dir=(dir+1)%4
    }
    
    return answer

};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])