/**
 * 풀이 1.
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
  id_list.forEach(id => {
    reportMap[id] = new Set();
  }); 

  report.forEach(entry => {
    const [reporter, reported] = entry.split(' ');
    reportMap[reporter].add(reported);
  }); 

  // 3. 신고당한 횟수 집계 { 신고 당한 사람 : 신고 횟수 }
  const reportCount = {};
  Object.values(reportMap).forEach(reportedSet => {
    reportedSet.forEach(name => {
      reportCount[name] = (reportCount[name] || 0) + 1;
    });
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