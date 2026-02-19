// O(n²) 풀이 : prices 를 돌면서 처음으로 price 보다 작은 값이 나왔을 때의 인덱스 차이

function solution(prices) {
    const answer = [];
    
    for (let i = 0; i < prices.length; i++){
        const price = prices[i];
        for(let j = i; j < prices.length; j++){
            if(price > prices[j] || j === prices.length - 1){
                answer.push(j - i);
                break;
            }
        }
    }
    return answer;
}