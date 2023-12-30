/**
 * @param {character[][]} board
 * @return {boolean}
 */

var solveSudoku = function (board) {
  let myBoard = [];
  let [row, col] = [board.length, board[0].length];
  for (let i = 0; i < row; i++) {
    board[i] = board[i].map((value) => (isNaN(value) ? value : Number(value)));
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        myBoard.push([i, j]);
      }
    }
  }
  dfs(board, myBoard);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = board[i][j].toString();
    }
  }

  return board;
};
function dfs(board, myBoard) {
  if (myBoard.length === 0) {
    return true;
  }

  for (let number = 1; number <= 9; number++) {
    const [x, y] = myBoard.shift();
    if (isValid(x, y, number, board)) {
      board[x][y] = number;
      let flag = dfs(board, myBoard);
      if (flag) return true;
      board[x][y] = ".";
    }
    myBoard.unshift([x, y]);
  }

  return false;
}
const isValid = (x, y, number, board) => {
  // 같은 행에 중복되는것이 있으면 안됨
  for (let i = 0; i < 9; i++) {
    if (board[x][i] == number) {
      return false;
    }
  }
  //     같은 열에 중복되는것이 있으면 안됨
  for (let i = 0; i < 9; i++) {
    if (board[i][y] == number) {
      return false;
    }
  }

  //     해당 3x3에 중복되는것이 있으면 안됨
  let s_x = Math.floor(x / 3) * 3;
  let s_y = Math.floor(y / 3) * 3;
  for (let i = s_x; i < s_x + 3; i++) {
    for (let j = s_y; j < s_y + 3; j++) {
      if (board[i][j] == number) {
        return false;
      }
    }
  }

  return true;
};
