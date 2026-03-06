function solution(info, edges) {
  let result = 0;

  const graph = Array.from({ length: info.length }, () => []);

  for (const [a, b] of edges) {
    graph[a].push(b);
  }

  DFS(0, 0, 0, []);
  return result;

  function DFS(currentNode, sheep, wolf, candidates) {
    let currentSheep = sheep + (info[currentNode] === 0 ? 1 : 0);
    let currentWolf = wolf + (info[currentNode] === 1 ? 1 : 0);

    if (currentWolf >= currentSheep) return;

    result = Math.max(result, currentSheep);

    const 다음접근후보 = [...candidates, ...graph[currentNode]];

    for (const value of 다음접근후보) {
      DFS(
        value,
        currentSheep,
        currentWolf,
        다음접근후보.filter((후보) => 후보 !== value),
      );
    }
  }
}
