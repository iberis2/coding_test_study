/**
 * 알고리즘: BFS (너비 우선 탐색)
 * 시간복잡도: O(R × C) - R은 행, C는 열 (BFS 2회 수행)
 * 공간복잡도: O(R × C) - visited 배열 및 큐
 */
let LEVER = []
let START = []
let END = []

let dx = [0, 0, 1, -1]
let dy = [-1, 1, 0, 0]

const bfs = (start, end, maps, R, C) => {
    let result = -1
    let queue = []
    let visited = Array.from({length: R}, () => new Array(C).fill(0))
    visited[start[0]][start[1]] = true
    queue.push([...start, 0])
    while (queue.length > 0) {
        let cur = queue.shift()
        if (cur[0] == end[0] && cur[1] == end[1]) {
            return cur[2]
        }
        for (let i = 0; i < 4; i++) {
            let nx = cur[0] + dx[i]
            let ny = cur[1] + dy[i]
            if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue
            if (maps[nx][ny] == "X") continue
            if (!visited[nx][ny]) {
                visited[nx][ny] = true
                queue.push([nx, ny, cur[2] + 1])
            }
        }
    }
    return result
}
function solution(maps) {
    var answer = 0

    const [R, C] = [maps.length, maps[0].length]

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (maps[i][j] == "S") {
                START = [i, j]
            } else if (maps[i][j] == "L") {
                LEVER = [i, j]
            } else if (maps[i][j] == "E") {
                END = [i, j]
            }
        }
    }

    const result1 = bfs(START, LEVER, maps, R, C)
    const result2 = bfs(LEVER, END, maps, R, C)

    if (result1 == -1 || result2 == -1) return -1
    return result1 + result2
}
