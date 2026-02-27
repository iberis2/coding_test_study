/**
  1. goal 배열을 앞에서부터 하나씩 확인한다.
  2. 현재 goal 단어가
      - cards1의 맨 앞 카드와 같다면 → cards1에서 그 카드를 사용한다 (제거)
      - cards2의 맨 앞 카드와 같다면 → cards2에서 그 카드를 사용한다 (제거)
      - 둘 다 아니라면 → 만들 수 없으므로 "No" 반환
  3. goal을 끝까지 문제 없이 확인했다면 → "Yes" 반환
 */

function solution(cards1, cards2, goal) {  
  for(el of goal){
      if(el === cards1[0]){
          cards1.shift();
      }else if(el === cards2[0]){
          cards2.shift();
      }else{
          return "No";
      }           
  }
      return "Yes"
}

/**
 * shift()는 O(N) → 배열 앞 요소 제거 시 모든 요소를 당겨야 함
 * 최악의 경우: G번 × shift(O(N)) → O(G × N)
 */

function solution(cards1, cards2, goal) {

  let i = 0; // cards1 포인터
  let j = 0; // cards2 포인터

  for (let word of goal) {
      if (word === cards1[i]) {
          i++;
      } 
      else if (word === cards2[j]) {
          j++;
      } 
      else {
          return "No";
      }
  }

  return "Yes";
}