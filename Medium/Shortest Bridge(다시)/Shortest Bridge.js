/**
 * @param {number[][]} grid
 * @return {number}
 */
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let queue;
let tmp=[]
var shortestBridge = function(grid) {   
    queue=[]
    tmp=[]
    let dist=new Array(grid.length).fill(0)
    for(let i=0;i<grid.length;i++){
        dist[i]=new Array(grid.length).fill(-1)
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1 && queue.length===0){
                tmp.push([i,j])
                dfs(i,j,grid,dist)
            }
        }
       
    }
    
    for(let i=0;i<grid.length;i++){
        dist[i]=new Array(grid.length).fill(-1)
    }
    for(let i=0;i<tmp.length;i++){
        const [x,y]=tmp[i]
        dist[x][y]=0
    }
    let answer=Infinity

    while(queue.length){
        let [curX,curY]=queue.shift()
        for(let i=0;i<4;i++){
            let [nx,ny]=[dx[i]+curX,dy[i]+curY]
            if(nx<0 || ny<0 || nx>=grid.length || ny>=grid.length)continue
            if(grid[nx][ny]===0 && dist[nx][ny]===-1 || dist[nx][ny]>dist[curX][curY]+1){
                queue.push([nx,ny])
                dist[nx][ny]=dist[curX][curY]+1
            }
            else if(grid[nx][ny]===1 && dist[nx][ny]===-1 ){
                dist[nx][ny]=dist[curX][curY]+1
                return dist[nx][ny]
            }
        }

    }
  

};

function dfs(x,y,grid,dist){
    if(grid[x][y]===0){
        queue.push([x,y])
        tmp.push([x,y])
        return true
    }
    for(let i=0;i<4;i++){
        let [nx,ny]=[dx[i]+x,dy[i]+y]
        if(nx<0 || ny<0 || nx>=grid.length || ny>=grid.length)continue
        if(dist[nx][ny]===-1){
            dist[nx][ny]=0
            if(dfs(nx,ny,grid,dist)){
                return true
            }  
        }
    }
    return false
}
shortestBridge([[0,1,0,0,0],[0,1,0,1,1],[0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0]])
// shortestBridge([[0,1],[1,0]])
// shortestBridge([[0,1,0],[0,0,0],[0,0,1]])
// shortestBridge([[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]])