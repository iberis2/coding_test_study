// O(n) 풀이: 단조 스택으로 각 원소를 한 번 push, 한 번 pop만
// 스택에는 가격이 아직 떨어지지 않은 인덱스를 저장
// 현재 가격이 이전 가격보다 작으면
// 이전 가격들은 지금 떨어진 것
// 따라서 스택에서 꺼내면서 정답 계산

function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const indexStack = [];
    
    for(let i = 0; i < prices.length; i++){
        while(indexStack.length && prices[indexStack[indexStack.length - 1]] > prices[i]){
            const prevIndex = indexStack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        
        indexStack.push(i);
    }
    
    while(indexStack.length){
        const prevIndex = indexStack.pop();
        answer[prevIndex] = prices.length - 1 - prevIndex;
    }
    
    return answer;
}