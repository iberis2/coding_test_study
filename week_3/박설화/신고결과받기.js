/**
 * 풀이 1. 각 유저의 인덱스를 빠르게 찾기 위해 id → index 매핑 객체(userIndex)를 만든다.
  2. report 배열에서 중복 신고를 제거한다. → 한 유저가 같은 유저를 여러 번 신고해도 1회 처리

  3. 자료구조 준비
    reportsByUser → "각 유저가 누구를 신고했는지" 저장하는 2차원 배열
    reportCountMap → "각 유저가 몇 번 신고당했는지" 저장하는 객체

  4. 중복 제거된 reports를 순회하면서:
    - 신고한 사람의 인덱스를 찾는다
    - 해당 인덱스 배열에 신고당한 유저를 추가한다
    - 신고당한 유저의 신고 횟수를 +1 한다

  5. reportCountMap을 순회하여 신고 횟수가 k 이상인 유저를 찾는다. → 정지된 유저 집합(blockedUser Set) 생성
  6. 각 유저가 신고한 목록을 순회하면서 그 중 정지된 유저 수를 계산한다. → 이것이 메일 발송 횟수
  7. 결과 배열 반환
 */
function solution(id_list, report, k) {
  const userIndex = {};
  id_list.forEach((id, i) => { userIndex[id] = i }); // O(N), findIndex 보다 시간 복잡도 효율 좋음

  // 1. 중복 신고 제거
  const reports = [...new Set(report)].map(re => re.split(' ')); // O(R) (R = report.length, 최대 200,000)
  // 2. 신고한 사람 인덱스별 신고당한 사람 배열
  const reportsByUser = Array.from({ length: id_list.length }, () => []); // O(N)
  // 3. 신고당한 사람 별 신고 횟수
  const reportCountMap = {};

  // 4. 신고한 사람 인덱스별 신고당한 사람 배열 채우기
  reports.forEach(([reporter, reportedUser]) => { // O(R) 중복 제거 후 reports 길이
    const index = userIndex[reporter];
    reportsByUser[index].push(reportedUser);
    reportCountMap[reportedUser] = (reportCountMap[reportedUser] || 0) + 1;
  });

  // 5. 블락된 멤버: 신고당한 사람 별 신고 횟수 >= k 인 사람 찾기
  const blockedUser = new Set(Object.keys(reportCountMap)?.filter((name) => reportCountMap[name] >= k)); // O(N)
  // 6. 블락된 유저 수 (=메일 수 개산)
  const answer = reportsByUser.map(list => list.filter(name => blockedUser.has(name)).length)

  return answer; // O(N + R)
}


/**
 * 풀이 2. GPT 리팩토링 코드, 중복 신고 자동 제거
 */
function solution(id_list, report, k) {
  // 1. { 신고한 사람 : new Set(신고 당한 사람들) }, 중복 신고 자동 제거
  const reportMap = {};
  id_list.forEach(id => { reportMap[id] = new Set() }); 

  report.forEach(entry => {
    const [reporter, reported] = entry.split(' ');
    reportMap[reporter].add(reported);
  }); 

  // 3. 신고당한 횟수 집계 { 신고 당한 사람 : 신고 횟수 }
  const reportCount = {};
  Object.values(reportMap).forEach(reportedSet => {
    reportedSet.forEach(name => { reportCount[name] = (reportCount[name] || 0) + 1 });
  });

  // 4. 정지 유저 Set
  const blockedSet = new Set(
    Object.keys(reportCount).filter(name => reportCount[name] >= k)
  );

  // 5. 메일 수 계산
  return id_list.map(user =>
    [...reportMap[user]].filter(name => blockedSet.has(name)).length
  );
}