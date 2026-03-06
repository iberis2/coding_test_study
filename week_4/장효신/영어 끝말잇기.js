/**
 * 알고리즘: 해시맵(HashMap) + 시뮬레이션
 * 시간복잡도: O(N × L) - N은 단어 수, L은 단어 최대 길이
 * 공간복잡도: O(N × L) - HashMap 저장 공간
 */
function isFinishWithLastWord(last, cur) {
    return cur[0] != last[last.length - 1]
}

function solution(n, words) {
    let wordMap = new Map()
    let turn = -1,
        cnt = -1
    for (let i = 0; i < words.length; i++) {
        let num = (i % n) + 1
        if (
            wordMap.get(words[i]) ||
            (i >= 1 && isFinishWithLastWord(words[i - 1], words[i])) ||
            words[i].length === 1
        ) {
            ;(turn = i), (cnt = num)
            break
        }
        wordMap.set(words[i], 1)
    }
    if (turn == -1) return [0, 0]
    return [cnt, Math.floor(turn / n) + 1]
}
