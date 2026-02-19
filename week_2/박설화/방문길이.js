// U => 좌표[1] + 1, D => 좌표[1] - 1, L => 좌표[0] -1, R => 좌표 =>[0] + 1,
// Set으로 새로운 좌표로 방문 할 때마다 이동 경로 `현재 좌표 + 이동한 좌표` 추가
// 오 -> 왼, 왼-> 오 같은 도로 이용한 것이니 두 개 추가
// 현재 좌표와 이동한 좌표가 동일하면(이동하지 않았으면) 경로 추가 X
// 현재 좌표 = 이동한 좌표로 바꿈
// 좌표의 최소/최대 -5, 5 를 넘어가는 좌표면 움직이지 않음
// 경로 Set / 2


function solution(dirs) {    
    function move(now, dir){
        if(dir === 'U') return now[1] < 5 ? [now[0], now[1] + 1] : now
        if(dir === 'D') return now[1] > -5 ? [now[0], now[1] - 1] : now
        if(dir === 'R') return now[0] < 5 ? [now[0] + 1, now[1]] : now
        if(dir === 'L') return now[0] > -5 ? [now[0] - 1, now[1]] : now
    }
    
    const routesSet = new Set();    
    let now = [0, 0];
    
    for(let i = 0; i < dirs.length; i++){       
        const moved = move(now, dirs[i]);
        if(!routesSet.has(`${now},${moved}`) && now !== moved){
           routesSet.add(`${now},${moved}`)
           routesSet.add(`${moved},${now}`)
        }
        now = moved
    }

    return routesSet.size / 2
}