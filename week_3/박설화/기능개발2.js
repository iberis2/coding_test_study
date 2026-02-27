/**
 * 개선된 O(n) 풀이
 *
 * 핵심 전략:
 * 1. 각 작업의 완료까지 걸리는 날짜를 계산
 * 2. 앞 작업 기준으로 배포 그룹을 묶음
 * 3. 전체 배열을 한 번만 순회
 *
 *  시간 복잡도: O(n)
 */

function solution(progresses, speeds) {
  const result = [];

  // 1. 각 작업의 완료까지 걸리는 날짜 계산 → O(n)
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  // 2. 첫 작업을 기준 배포일로 설정
  let currentDeployDay = days[0];
  let count = 1;

  // 3. 한 번만 순회하며 배포 그룹 계산 → O(n)
  for (let i = 1; i < days.length; i++) {
    if (days[i] <= currentDeployDay) {
      // 같은 날 배포 가능
      count++;
    } else {
      // 새로운 배포 시작
      result.push(count);
      currentDeployDay = days[i];
      count = 1;
    }
  }

  // 마지막 배포 그룹 추가
  result.push(count);

  return result;
}