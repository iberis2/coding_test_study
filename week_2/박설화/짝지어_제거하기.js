function solution(s){
    if(s.length % 2 !== 0) return 0;
    
    const stack = [];
    for (char of s){
        if(stack.length && char === stack[stack.length - 1]){
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0 ? 1 : 0
}