// log₂(n), O(1) × O(log n) = O(log n)
function solution(n,a,b){
  let count = 1;
  function DFS(a, b, count){
      if (Math.ceil(a/2) === Math.ceil(b/2)) return count;
  
      a = a % 2 === 0 ? a / 2 : Math.floor(a / 2) + 1;
      b = b % 2 === 0 ? b / 2 : Math.floor(b / 2) + 1;
      count++;
      return DFS(a, b, count)
  }

  return DFS(a, b, count);
}

// 처음 풀이 
// if (Math.ceil(a/2) === Math.ceil(b/2)) return count; 로 했더니 case A = 2, B = 3 일 때 실패