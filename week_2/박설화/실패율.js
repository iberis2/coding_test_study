// 실패율
// 1번 스테이지 > 1번 스테이지에 있는 사람 / 전체
// 2번 스테이지 > 2번 스테이지에 있는 사람/전체 - 1번 테이지에 있는 사람
// 3번 스테이지 > 3번 / 전체 - 1번 - 2번
// { index: , 실패율: }

function solution(N, stages) {
    const answer =  [];
    for (let stage = 1, user = stages.length; stage <= N ; stage++){
        const stageUser = stages.filter(s => s === stage).length;
        answer.push({stage, failure: stageUser/user })
        user = user - stageUser;
    }
    const result = answer.sort((a, b) =>  b.failure - a.failure).map(a => a.stage)
    
    return result;
}