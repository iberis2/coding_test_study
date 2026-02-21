function solution(board, moves) {
    var answer = 0;
    let m = board.length;
    let n = board[0].length;
    let stacks=Array.from({length:n+1},()=>[])
    let cart=[]
    
    for(let i =m-1;i>=0;i--){
        for(let j=0;j<n;j++){
            if(board[i][j]!==0){
            stacks[j+1].push(board[i][j])
            }
        }
    }
    
    console.log(stacks)
    
    // 무브는 스택에서 팝 
    for(let move of moves){
        let item =stacks[move].pop()
        if(item === undefined){
            continue
        }
        if(cart.length===0 ||cart.at(-1)!==item){
            cart.push(item)
        }else{
            cart.pop()
            answer+=2
        }
    }
    console.log(answer)
    return answer;
}

// 스택 통 만들기
// 안애 먼저 푸쉬해야해
// 그리고 i열 이면 i+1스택에 넣자

// 집기 -> 스택가서 하나 뽑는다 
// 언디파인드면 패스
// 있으면 비교해서 마지막이랑 같으면 팝 정답+2 아니면 추가