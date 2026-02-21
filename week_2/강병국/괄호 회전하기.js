function solution(s) {
    let answer = 0;
    const len = s.length;

    // 길이가 홀수면 올바른 괄호가 될 수 없음
    if (len % 2 !== 0) return 0;

    // 문자열을 두 번 이어 붙여 회전 효과를 대체합니다.
    const doubleS = s + s;

    for (let i = 0; i < len; i++) {
        // 새로운 문자열을 자르지 않고, 시작 인덱스(i)만 전달합니다.
        if (isValidOptimized(doubleS, i, len)) {
            answer++;
        }
    }

    return answer;
}

// 시작 인덱스부터 길이(len)만큼만 검사하는 최적화된 헬퍼 함수
function isValidOptimized(str, startIdx, len) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < len; i++) {
        // startIdx를 기준으로 len만큼 문자를 하나씩 확인합니다.
        const char = str[startIdx + i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            
            const top = stack.pop();
            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}