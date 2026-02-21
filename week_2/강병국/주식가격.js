function solution(prices) {
    const n = prices.length;
    // 1. 정답을 담을 배열을 prices 길이만큼 0으로 초기화합니다.
    const answer = new Array(n).fill(0);
    // 2. 시간(인덱스)을 담을 스택을 선언합니다.
    const stack = []; 

    for (let i = 0; i < n; i++) {
        // 스택이 비어있지 않고, 현재 가격이 스택 최상단(과거)의 가격보다 작을 때 (가격 하락)
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const pastIndex = stack.pop();
            answer[pastIndex] = i - pastIndex; // 하락하기까지 걸린 시간 계산
        }
        
        // 아직 하락하지 않은 현재 시간(인덱스)을 스택에 추가
        stack.push(i);
    }
    
    // 3. 배열을 모두 순회한 후에도 가격이 떨어지지 않아 스택에 남아있는 시간들 처리
    while (stack.length > 0) {
        const pastIndex = stack.pop();
        answer[pastIndex] = n - 1 - pastIndex; // 끝까지 유지된 시간 계산
    }
    
    return answer;
}