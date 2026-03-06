from collections import deque

def solution(maps):
    answer = 0
    
    def bfs(start, lever):
        visit = [[0] * len(maps[0]) for _ in range(len(maps))]
        dx, dy = [0, 0, 1, -1], [1, -1, 0, 0]
        q = deque([start])
        visit[start[0]][start[1]] = 1
        
        while q:
            x, y = q.popleft()
            
            for i in range(4):
                mx, my = x + dx[i], y + dy[i]
                
                if 0 <= mx < len(maps) and 0 <= my < len(maps[0]) and visit[mx][my] ==0 and maps[mx][my] != 'X':
                    if not lever and maps[mx][my] == 'L':
                        return visit[x][y]
                    elif lever and maps[mx][my] == 'E':
                        return visit[x][y]
                    else:
                        q.append([mx,my])
                        visit[mx][my] = visit[x][y] + 1
        return -1

    for i in range(len(maps)):
        for j in range(len(maps[0])):
            if maps[i][j] == 'S':
                start = [i,j]
            elif maps[i][j] == 'L':
                lever = [i,j]
    
    _time = bfs(start, False)
    
    if _time == -1:
        return -1
    else:
        _time2 = bfs(lever, True)
        if _time2 == -1:
            return -1
    return _time + _time2
    
    
    
    return answer