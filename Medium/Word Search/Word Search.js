/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const dx=[0,1,0,-1]
const dy=[1,0,-1,0]
let answer_word=""
let visited;

const dfs=(cur_x,cur_y,board,new_word)=>{ 

    if(new_word.length===answer_word.length){
        return answer_word===new_word ? true: false
    }

    for(let i=0;i<4;i++){
        let [nx,ny]=[cur_x+dx[i],cur_y+dy[i]]
        if(nx<0 || ny<0 || nx>=board.length || ny>=board[0].length || visited[nx][ny]){
            continue            
        }
        const next_alpha=new_word+board[nx][ny]
        let flag=false
        visited[nx][ny]=true
        flag=dfs(nx,ny,board,next_alpha)
        if(flag) return true
        visited[nx][ny]=false
    }
    return false
}
    
    

var exist = function(board, word) {
let answer=false
answer_word=word
let [row,col]=[board.length,board[0].length]
visited=Array.from(new Array(row),()=>new Array(col).fill(false))


for(let i=0;i<board.length;i++){
    for(let j=0;j<board[i].length;j++){
        let current_word=board[i][j]
        visited[i][j]=true
        answer=dfs(i,j,board,current_word)
        visited[i][j]=false
        if(answer) return true
    }
}
return answer
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"))
// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE")
// exist([["a","b"],["c","d"]],"abcd")