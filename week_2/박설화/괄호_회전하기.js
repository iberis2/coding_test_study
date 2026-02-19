// s 의 길이만큼 돌면서 스택에 집에 넣고 꺼냄, 전부 꺼내지면 answer ++ 
// 회전 n번 각 회전마다 n 검사 시간 복잡도 O(n²)


function solution(s) {
    if (s.length % 2 !== 0) return 0;
    const len = s.length;
    const double = s + s;
    
    const bracket = { ')': '(', ']': '[', '}': '{' };

    let answer = 0;

    for(let start = 0; start < len; start++){
        const stack = [];
        let valid = true;
        for (let i = start; i < start + len; i++){
            const char = double[i];
            
            if(bracket[char]){
                if(stack.pop() !== bracket[char]){
                    valid = false;
                    break;
                }
            } else{
                stack.push(char);
            }

        }
        
        if (valid && stack.length === 0) answer++;
    }    

    return answer;
}