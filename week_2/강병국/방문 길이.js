function solution(dirs) {
    var answer = 0;
    let x=0;
    let y=0;
    let minX;
    let minY;
    let paths=new Set([])
    const direction={
        U:{dx:0,dy:1},
        D:{dx:0,dy:-1},
        R:{dx:1,dy:0},
        L:{dx:-1,dy:0},
 
    }
    for(let dir of dirs){
        const {dx,dy}=direction[dir]
        if(!isValid(x+dx,y+dy)){
            continue;
        }
        minX=Math.min(x,x+dx);
        minY=Math.min(y,y+dy);
        if(dir==='U' || dir==='D'){
            if(!paths.has('U'+String(minX)+String(minY))){
                paths.add('U'+String(minX)+String(minY));
                answer+=1
            }
        }else if(dir==='L'||dir==='R'){
            if(!paths.has('R'+String(minX)+String(minY))){
                 paths.add('R'+String(minX)+String(minY));
                answer+=1
            }
        }
        x=x+dx;
        y=y+dy;
    }
    return answer;
    
    function isValid(x,y){
        if(-5<=x && x<=5 && -5<=y && y<=5){
            return true
        }
        return false
    }
}

// 가능 길 체크 맞으면 이동실행 아니면 패스

// 이동실행은 좌표 이동 그리고 길 겹친지 확인 
// 길안겹치면 answer 1추가
// 길은 시작 xy 도착 xy
// 왼쪽 아래에서 1
// 'x좌표y좌표u아님r'