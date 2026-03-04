function solution(maps) {
  let start = [0, 0];
  let lever = [0, 0];
  let exit = [0, 0];
  for (let y = 0; y < maps.length; y++){
      for(let x = 0; x < maps[y].length; x++){
          if(maps[y][x] === 'S'){
              start = [y, x];
          } else if(maps[y][x] === 'L'){
              lever = [y, x];
          } else if(maps[y][x] === 'E'){
              exit = [y, x];
          }
      }
  }
  
  const toLever = bfs(start, lever, maps);
  if(toLever === -1) return -1;
  
  const toExit = bfs(lever, exit, maps);
  if(toExit === -1) return -1;

  
  return toLever + toExit
}

function bfs(start, target, maps){
  const queue = [];
  const visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false));
  
  const [startY, startX] = [start[0], start[1]]
  
  queue.push([startY, startX, 0]);
  visited[startY][startX] = true;
  
  while(queue.length){
      const [y, x, dist] = queue.shift();
      
      if(target[0] === y && target[1] === x) return dist;
      
      for(let [ny, nx] of [[y-1, x], [y + 1, x], [y, x-1], [y, x+1]]){
          const 범위체크 = ny < maps.length && nx < maps?.[0]?.length && ny >= 0 && nx >= 0
          if(범위체크 && maps[ny][nx] !== 'X' && visited[ny][nx] === false){
              queue.push([ny, nx, dist + 1]);
              visited[ny][nx] = true;
          }
      }    
  }
  
  return -1;
}