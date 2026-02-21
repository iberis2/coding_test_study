function solution(s)
// 문자열 s 가 palindrome의 합으로 이루어져 있으면 1 아니면 0을 리턴하는 함수
// 시간복잡도 O(n) n은 문자열의 길이
{
    let stack=[]

    // 스택이 비어있거나 스택의 마지막 문자와 다르면 새로운 문자 추가
    // 스택의 마지막 문자와 일치하면 스택의 마지막 문자 제거
   for(let char of s){
       if(stack.length===0 || stack.at(-1)!==char){
           stack.push(char)
       }else{
           stack.pop()
       }
   }
    if (stack.length>0){
        return 0
    }
    return 1
}

