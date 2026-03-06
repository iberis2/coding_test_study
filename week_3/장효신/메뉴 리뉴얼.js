/**
 * 알고리즘: 조합(Combination) + 해시맵(HashMap)
 * 시간복잡도: O(orders × C(L, K)) - L은 주문 문자열 길이, K는 코스 길이
 * 공간복잡도: O(조합의 총 개수)
 */
const getCombinations = function (arr, selectNumber) {
    const results = []
    // nC1: 모든 배열의 원소 리턴
    if (selectNumber === 1) return arr.map((el) => [el])

    arr.forEach((fixed, index, origin) => {
        // 해당 fixed 제외한 나머지 뒤
        const rest = origin.slice(index + 1)

        // 나머지에 대해서 조합 구한다.
        const combinations = getCombinations(rest, selectNumber - 1)

        // 돌아온 조합에 대해 fixed 붙이기
        const attached = combinations.map((el) => [fixed, ...el])

        results.push(...attached)
    })
    return results
}

function solution(orders, course) {
    var answer = []
    let mapArr = Array.from({length: course.length}, (v, i) => new Map())

    console.log(mapArr)

    course.forEach((len, idx) => {
        orders.forEach((order) => {
            let result = getCombinations(order.split(""), len)
            // 각 조합에 대해 map 에 등록
            result = result.map((el) => el.sort().join(""))
            result.forEach((key) =>
                mapArr[idx].set(key, (mapArr[idx].get(key) || 0) + 1)
            )
        })
    })

    for (const map of mapArr) {
        const maxCnt = Math.max(...[...map.values()])
        if (maxCnt < 2) continue
        for (const [key, val] of map) {
            if (val === maxCnt) {
                answer.push(key)
            }
        }
    }
    return answer.sort((a, b) => (a > b ? 1 : -1))
}
