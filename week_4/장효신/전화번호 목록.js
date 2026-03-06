/**
 * 알고리즘: 정렬 + 문자열 비교
 * 시간복잡도: O(N log N × L) - N은 전화번호 수, L은 전화번호 최대 길이 (정렬)
 * 공간복잡도: O(N × L) - 정렬 공간
 */
function solution(phone_book) {
    phone_book = phone_book.map((book) => book.split(" ").join(""))
    phone_book.sort()
    for (let i = 0; i < phone_book.length - 1; i++) {
        let cur = phone_book[i]
        if (phone_book[i + 1].startsWith(cur)) return false
    }
    return true
}
