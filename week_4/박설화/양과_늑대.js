function solution(info, edges) {
  let answer = 0;
  const graph = Array.from({length: info.length}, () => []);
  edges.forEach(([p, c], i)=>{
      graph[p].push(c);
  });

  let sheep = 0, wolf = 0;
  for(let i = 0; i < info.length; i++){
      dfs(i, sheep, wolf, graph[i]);
  }
  
  function dfs(curNode, sheep, wolf, candidates){
      info[curNode] ? wolf++ : sheep++;
      if(wolf >= sheep) return;
      
      answer = Math.max(answer, sheep);

      for(let nextNode of [...candidates]){
          const nextCandidates = [...candidates.filter(n => n !== nextNode), ...graph[nextNode]];
          dfs(nextNode, sheep, wolf, nextCandidates);
      }
  }
  return answer;
}

