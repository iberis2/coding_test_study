function solution(board, moves) {
  let stack = [];
  let answer = 0;
  
  moves.forEach(el => {
      let i = el - 1;
      
      for(let m = 0; m < board.length; m++){
          let doll = board[m][i];
                          
          if(doll){
              board[m][i] = 0;
              if(stack.length && stack[stack.length - 1] === doll){
                  stack.pop();
                  answer += 2;
              } else {
                  stack.push(doll);
              }
              break;
          }
      }
  })

  return answer;
}