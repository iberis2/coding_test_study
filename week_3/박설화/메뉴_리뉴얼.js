/** 
  1. 모든 주문 문자열을 알파벳 오름차순으로 정렬한다. → 같은 메뉴 조합일 때 중복되지 않도록 ex) WX, XW
  2. 결과를 저장할 배열 result를 생성한다.
  3. course 배열을 순회하면서 각 코스 길이(size)에 대해 다음을 수행한다:
      3-1. 조합 등장 횟수를 저장할 Map(comboCount)을 생성한다.
      3-2. 모든 주문을 순회한다.
            → 현재 주문 길이가 size 이상이면:
                a. 해당 주문에서 길이 size인 모든 조합을 생성한다. (DFS 기반 조합 생성)
                b. 생성된 각 조합의 등장 횟수를 Map에 누적한다.
      3-3. Map을 순회하면서 가장 많이 등장한 횟수(max)를 찾는다.
      3-4. max가 2 이상이면
            → 가장 많이 등장한 조합(빈도 === max)을 result에 추가한다.
            (최소 2명 이상 주문된 조합만 허용)
 */


function solution(orders, course) {
  // 1. 각 주문 문자열을 알파벳 오름차순 정렬 (같은 조합을 동일한 문자열 형태로 만들기 위해)
  /* 시간복잡도: O(N * L log L)
    N = orders 길이 (최대 20)
    L = 한 주문의 최대 길이 (최대 10)
  */
  orders = orders.map(order => [...order].sort().join(''));

  const result = [];

  // 2. course 배열을 순회 (코스 길이 종류만큼 반복)
  // C = course.length (최대 10)
  course.forEach(size => {

      // <조합 문자열, 등장 횟수> 저장용 Map
      const comboCount = new Map();

      // 3. 모든 주문에 대해 해당 길이 조합 생성
      // N번 반복 → O(N)
      orders.forEach(od => {

          // 현재 주문 길이가 코스 길이 이상일 때만 조합 생성
          if (od.length >= size) {

              // 4. 길이 size인 모든 조합 생성
              // 시간복잡도: O( nCk )
              // n = od.length (최대 10)
              const menus = makeCombination(od, size);

              // 생성된 조합 개수만큼 반복
              menus.forEach(menu => {
                  comboCount.set(menu, (comboCount.get(menu) ?? 0) + 1);
              });
          }
      });

      // 5. 가장 많이 등장한 조합 횟수 찾기
      // Map 전체 순회
      // 시간복잡도: O(M), M = 생성된 전체 조합 개수
      let max = 0;
      for (let v of comboCount.values()) {
          max = Math.max(max, v);
      }

      // 최소 2명 이상 주문한 경우만 후보
      if (max >= 2) {
          // 다시 Map 전체 순회 ->  시간복잡도: O(M)
          for (let [k, v] of comboCount) {
              if (v === max) result.push(k);
          }
      }
  });

  // 최종 정렬
  // 시간복잡도: O(R log R)
  // R = 결과 개수
  return result.sort();
};



function makeCombination(str, k) {
  const menus = [];

  // DFS 백트래킹 방식으로 조합 생성
  // 1. 현재 문자열 길이가 k이면 결과에 추가
  // 2. startIndex부터 끝까지 순회
  // 3. 다음 문자 하나 선택하고 재귀 호출
  // 4. 모든 경우 탐색

  function DFS(startIndex, curStr) {

      // 종료 조건: k개 다 뽑았을 때
      if (curStr.length === k) {
          menus.push(curStr);
          return;
      }

      // 다음 문자 선택
      for (let i = startIndex; i < str.length; i++) {
          DFS(i + 1, curStr + str[i]);
      }
  }

  DFS(0, '');

  // 시간복잡도:
  // 조합 개수 = nCk
  // 각 조합 생성 비용 O(k)
  // 총 O( nCk * k )
  return menus;
}