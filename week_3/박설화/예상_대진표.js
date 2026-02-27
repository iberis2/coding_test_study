/** 
 * 0. 두 숫자가 같은 부모 노드를 가지는 시점이 두 선수가 만나는 라운드
    = 이진 트리에서 두 노드의 최소 공통 부모를 찾는 과정
  1. 라운드 수(count)를 1로 시작한다.
  2. 두 참가자가 같은 경기 조에 속하는지 확인한다.
  → ceil(a / 2) === ceil(b / 2)
  → 같은 번호 그룹이면 해당 라운드에서 만나는 것
  3. 만약 아직 만나지 않았다면:
  - 다음 라운드 번호로 갱신한다. 다음 라운드 번호는는 ceil(현재번호 / 2)
  - 라운드 수를 1 증가시킨다.
  - 재귀 호출
  4. 두 번호가 같아지는 순간의 count를 반환한다.
*/
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