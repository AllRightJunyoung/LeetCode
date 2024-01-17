/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
let comibantion;
var maxCompatibilitySum = function(students, mentors) {
    let answer=0
    comibantion=[]
    let visited=[]
    
    dfs(mentors,visited)
    for(let i=0;i<comibantion.length;i++){
        let mentor=comibantion[i]
        answer=Math.max(calculate(students,mentor,mentors),answer)
    }
    return answer
};
function dfs(mentors,visited){
    if(visited.length===mentors.length){
        comibantion.push([...visited])
        return 

    }

    for(let i=0;i<mentors.length;i++){
        if(!visited.includes(i)){
            visited.push(i)
            dfs(mentors,visited)
            visited.pop()    
        }
           
        
    }

}
function calculate(students,mentor,mentors){
    let score=0
    for(let i=0;i<mentor.length;i++){
        const number=mentor[i]
        for(let j=0;j<students[number].length;j++){
            if(students[i][j]===mentors[number][j]){
                score+=1
            }
        }
    }
    return score
}
maxCompatibilitySum([[1,1,0],[1,0,1],[0,0,1]],[[1,0,0],[0,0,1],[1,1,0]])
maxCompatibilitySum([[0,0],[0,0],[0,0]],[[1,1],[1,1],[1,1]])