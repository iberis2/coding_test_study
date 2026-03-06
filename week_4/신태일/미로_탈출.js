function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;

  let start, lever, exit;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === "S") start = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
      if (maps[i][j] === "E") exit = [i, j];
    }
  }

  function BFS(from, to) {
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    const visited = []; // 가봤는지?
    for (let i = 0; i < rows; i++) {
      visited.push(new Array(cols).fill(false));
    }
    console.log(visited);

    const queue = []; // 대기큐

    queue.push({ y: from[0], x: from[1], dist: 0 });

    console.log(queue);
    visited[from[0]][from[1]] = true;

    while (queue.length > 0) {
      const current = queue.shift();
      const y = current.y;
      const x = current.x;
      const d = current.dist;

      if (y === to[0] && x === to[1]) return d;

      for (let i = 0; i < 4; i++) {
        const Y = y + dy[i];
        const X = x + dx[i];

        if (Y >= 0 && Y < rows && X >= 0 && X < cols) {
          if (maps[Y][X] !== "X" && !visited[Y][X]) {
            visited[Y][X] = true;
            queue.push({ y: Y, x: X, dist: d + 1 });
          }
        }
      }
    }
    return -1;
  }

  const 레버최단 = BFS(start, lever);
  if (레버최단 === -1) return -1;

  const 탈출최단 = BFS(lever, exit);
  if (탈출최단 === -1) return -1;

  return 레버최단 + 탈출최단;
}
