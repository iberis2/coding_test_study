/** 
 * 
  0. 배열에서 splice/shift로 삭제하면 O(N) → 시간초과 (n 최대 1,000,000)
    → 연결리스트처럼 prev/next 포인터만 수정하면 삭제/복구가 O(1)

  1. 연결리스트를 배열로 구현한다.
      - prev[i] : i번 행의 이전 행 번호
      - next[i] : i번 행의 다음 행 번호
      - alive[i]: i번 행이 삭제되었는지 여부

    즉, 0 <-> 1 <-> 2 <-> 3 ... 형태를 배열 두 개로 표현한다.

  2. 현재 선택된 행(cur)을 k로 설정한다. 삭제된 행 복구를 위해 stack을 준비한다.

  3. 명령어를 하나씩 처리한다.
    (1) "U X" → prev를 따라 X번 이동
    (2) "D X" → next를 따라 X번 이동
    (3) "C" → 현재 행 삭제
            - stack에 {현재행, prev, next} 저장
            - alive[cur] = false
            - 이전/다음 노드 연결 재조정
            - 커서는 다음 행이 있으면 next, 없으면 prev로 이동

    (4) "Z" → 가장 최근 삭제 복구
            - stack.pop()
            - alive[row] = true
            - prev/next 링크 복원

  4. 모든 명령어 수행 후 alive 배열을 순회하면서 O/X 문자열 생성 후 반환
*/

function solution(n, k, cmd) {
  const prev = Array.from({ length: n }, (_, i) => i - 1);
  const next = Array.from({ length: n }, (_, i) => i + 1 < n ? i + 1 : -1);
  const alive = Array(n).fill(true);
  
  const stack = [];
  let cur = k;
  
  for(const c of cmd){
      const [dir, s] = c.split(' ');
      let step = Number(s);
      
      if(dir === 'U'){
          while(step--) cur = prev[cur];
          
      } else if(dir === 'D') {
          while(step--) cur = next[cur];
          
      } else if(dir === 'C') {
          // 현재 행 삭제
          const p = prev[cur];
          const n1 = next[cur];
          stack.push({ row: cur, p, n: n1 });
          alive[cur] = false;

          // 이웃 연결 갱신
          if (p !== -1) next[p] = n1;
          if (n1 !== -1) prev[n1] = p;

          // 커서 이동: 아래가 있으면 아래, 없으면 위
          cur = (n1 !== -1) ? n1 : p;

      } else if(dir === 'Z') {
          // 최근 삭제 복구
          const { row, p, n: n1 } = stack.pop();
          alive[row] = true;

          // 링크 복원
          if (p !== -1) next[p] = row;
          if (n1 !== -1) prev[n1] = row;
          prev[row] = p;
          next[row] = n1;            
      }
  }
  
  return alive.map(v => (v ? "O" : "X")).join("");
}

/**
 * 
  ==================================================
  [시간 복잡도 분석]
  ==================================================

  n ≤ 1,000,000
  cmd ≤ 200,000
  이동 명령 X의 총합 ≤ 1,000,000

  각 명령어 처리 비용:

  U X / D X
      → 실제 이동 횟수만큼 수행
      → 모든 이동의 총합 ≤ 1,000,000

  C / Z
      → O(1)

  👉 전체 시간복잡도:

      O(n + 총 이동 횟수 + cmd)
      ≈ O(n + cmd)

      최악의 경우 약 1~2백만 연산
      → 통과 가능

  공간복잡도:
      prev, next, alive 배열
      → O(n)
 */