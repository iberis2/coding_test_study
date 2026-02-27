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