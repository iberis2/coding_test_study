// 시간복잡도 O(N + M) 입니다. (N은 id_list의 길이, M은 report 배열의 길이입니다.)

function solution(id_list, report, k) {
    var answer = [];
    
    
    // 신고 당한 횟수를 기록
    const reportedMap = new Map();
    for (let str of report) {
        const [reporter, reported] = str.split(" ");
        addItemToMap(reportedMap, reported, reporter);
    }
    
    
    //신고 성공한 횟수를 기록하는 Map
    const successMap = new Map();
    // reportedMap을 순회하며 정지 기준(k)을 넘겼는지 확인
    for (let reported of reportedMap.keys()) {
        if (reportedMap.get(reported).size >= k) {
            // 정지 기준을 넘겼다면, 신고한 사람(reporter)들에게 메일 발송 카운트 증가
            reportedMap.get(reported).forEach((reporter) => {
                let count = successMap.get(reporter) ?? 0;
                successMap.set(reporter, count + 1);
            });
        }
    }
    
    //각 유저별로 신고 성공 횟수를 count 
    // id_list 순서대로 결과 배열 생성
    id_list.forEach((user) => {
        let count = successMap.get(user) ?? 0;
        answer.push(count);
    });
    
    return answer;
    
    
    // value가 Set()인 맵을 생성하는 함수
    function addItemToMap(map, key, value) {
        if (!map.has(key)) {
            map.set(key, new Set());
        }
        map.get(key).add(value);
    }
}