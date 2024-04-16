/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited=new Array(rooms.length).fill(false)
    visited[0]=true
    dfs(0,rooms,visited)
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            return false
        }
    }
    return true

};
function dfs(cur,rooms,visited){
    if(rooms.length===cur){
        return
    }
    


    for(let i=0;i<rooms[cur].length;i++){
        const key=rooms[cur][i]
        if(!visited[key]){
            visited[key]=true
            dfs(key,rooms,visited)
        }

    }
   
    return
}

canVisitAllRooms([[1,3],[3,0,1],[2],[0]])
// canVisitAllRooms([[1],[2],[3],[]])
// canVisitAllRooms([[2],[],[1]])