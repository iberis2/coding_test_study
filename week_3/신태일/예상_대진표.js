/*
1 -> 1
2 -> 1
3 -> 2
4 -> 2
N번 -> Math.ceil(N/2)
*/

function solution(n, a, b) {
  let answer = 1;

  while (1) {
    if (Math.ceil(a / 2) == Math.ceil(b / 2)) {
      break;
    } else {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer++;
    }
  }

  return answer;
}
