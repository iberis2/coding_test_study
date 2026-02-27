/**
 * 기능 개발 배포 문제
 * - 가장 앞 작업이 완료(>=100%)되면,
 *   그 뒤에 연속으로 완료된 작업들을 함께 배포한다.
 * - 모든 작업이 배포될 때까지 이 과정을 반복한다.
 * - 중복 작업 처리가 발생하므로 비효율적인 O(n²) 구조를 가진다.
 */
function solution(progresses, speeds, stack = []) {
  // 1. 항상 첫 번째 작업(가장 높은 우선순위)을 기준으로 판단
  let top = 0;

  // 2. 첫 번째 작업이 아직 완료되지 않았다면 (100% 미만)
  //    → 하루가 지나면서 모든 작업의 진행도를 증가시킨다.
  //    → progresses 전체를 순회하므로 O(n) 시간 복잡도를 가진다.
  if (progresses[top] < 100) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  } else {  // 3. 첫 번째 작업이 완료되었다면 (100% 이상) → 연속으로 완료된 작업 개수를 센다.
    //  → 최악의 경우 모든 작업을 순회 → O(n)
    while (progresses[top] >= 100) {
      top++;
    }

    // 4. 이번 배포에서 처리된 작업 개수를 stack에 저장
    stack.push(top);
  }

  // 5. 이번에 배포된 작업들을 배열에서 제거
  //  → splice는 내부적으로 배열을 당기므로 O(n)
  progresses.splice(0, top);
  speeds.splice(0, top);

  // 7. 남은 작업이 있다면 재귀 호출로 같은 과정을 반복
  return progresses.length ? solution(progresses, speeds, stack) : stack;
}

  /**
   * ⏱ 전체 시간 복잡도 분석
   *
   * - progresses 길이를 n이라 할 때
   * - 매 재귀 호출마다:
   *      ① 전체 순회 O(n)
   *      ② splice O(n)
   *
   * - 최악의 경우:
   *      하루에 하나씩만 배포된다면
   *      재귀 호출이 n번 발생
   *
   * → O(n) × n번 반복
   *
   * 📌 최종 시간 복잡도: O(n²)
   */
