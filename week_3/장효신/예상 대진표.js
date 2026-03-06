/**
 * 알고리즘: 시뮬레이션 (비트 연산)
 * 시간복잡도: O(log N) - 매 라운드마다 번호가 절반으로 줄어듦
 * 공간복잡도: O(1)
 */
function solution(n, a, b) {
    var answer = 0
    while (1) {
        if (a === b) break
        if (a & (1 === 1)) {
            a = (a + 1) >> 1
        } else {
            a = a >> 1
        }
        if (b & (1 === 1)) {
            b = (b + 1) >> 1
        } else {
            b = b >> 1
        }
        answer++
    }
    return answer
}
