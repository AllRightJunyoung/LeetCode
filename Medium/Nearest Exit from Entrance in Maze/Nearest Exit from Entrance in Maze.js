/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

var nearestExit = function(maze, entrance) {
    // 밖으로 나갈수있는 좌표를 저장
    let exit_list=[]
    for(let i=0;i<maze.length;i++){
        for(let j=0;j<maze[i].length;j++){
            if(maze[i][j]==='.'){
                if(isExit(i,j,maze)){
                    exit_list.push([i,j])
                }
            }
        }
    }
    let dist=new Array(maze.length).fill(-1)
    for(let i=0;i<dist.length;i++){
        dist[i]=new Array(maze[0].length).fill(-1)
    }
    
    let queue=[]
    queue.push(entrance)
    dist[entrance[0]][entrance[1]]=0
    while(queue.length){
        let [curX,curY]=queue.shift()
        for(let i=0;i<4;i++){
            let [nx,ny]=[curX+dx[i],curY+dy[i]]
            if(nx<0 || ny <0 || nx>=maze.length || ny>=maze[0].length)continue
            if(dist[nx][ny]===-1 && maze[nx][ny]==='.'){
                dist[nx][ny]=dist[curX][curY]+1
                queue.push([nx,ny])
            }
        }
    }
    let answer=Infinity
    for(let i=0;i<exit_list.length;i++){
        const [x,y]=exit_list[i]
        if(x===entrance[0] && y===entrance[1])continue // 입구좌표제외
        if(dist[x][y]!==-1){
            answer=Math.min(dist[x][y],answer)
        }
    }
    if(answer===Infinity){
        return -1
    }
    return answer

};
function isExit(curX,curY,maze){

    for(let i=0;i<4;i++){
        let [nx,ny]=[curX+dx[i],curY+dy[i]]
        if(nx<0 || ny <0 || nx>=maze.length || ny>=maze[0].length){
            return true
        }
    }
    return false


}

// nearestExit([["+","+",".","+"],[".",".",".","+"],["+","+","+","."]],[1,2])
nearestExit([["+","+","+"],[".",".","."],["+","+","+"]],[1,0])