/**
 * 알고리즘: 큐 / 시뮬레이션
 * 시간복잡도: O(N) - N은 작업의 수
 * 공간복잡도: O(N)
 */
function solution(progresses, speeds) {
    // 각 배포때마다 몇개의 기능이 배포되는지.
    // 1. 각 기능이 배포되는데 걸리는 시간을 구한다.
    progresses = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]))

    // 2. 각 배포마다 몇개의 기능이 배포되는지 구한다.
    const answer = []
    let prev = progresses[0],
        count = 0
    progresses.forEach((v, i) => {
        if (prev < v) {
            answer.push(count)
            count = 1
            prev = v
        } else {
            count++
        }
    })
    answer.push(count)

    return answer
}
