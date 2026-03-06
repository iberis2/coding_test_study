/**
 * 알고리즘: DFS (깊이 우선 탐색) + 백트래킹
 * 시간복잡도: O(2^N) - 방문 가능한 노드 부분집합을 탐색
 * 공간복잡도: O(N × 2^N) - 상태(Status) 객체 생성
 */
class Status {
    constructor(info, edges, visited, sheep, wolf) {
        this.info = info
        this.edges = edges
        this.visited = visited || new Set()
        this.sheep = sheep || 0
        this.wolf = wolf || 0
    }

    // 현재 방문했던 노드를 기준으로 새로 방문 가능한 또 다른 노드들 찾음
    // path 에 대해 방문 가능한 노드들 다시 계산
    visitable() {
        let res = new Set()
        this.visited.forEach((v) => {
            if (this.edges[v] && this.edges[v].length > 0) {
                this.edges[v].forEach((next) => {
                    if (!this.visited.has(next)) {
                        res.add(next)
                    }
                })
            }
        })
        return res
    }

    // v 노드를 방문한 상황에 따라 status 내의 양의 수 및 늑대의 수 그리고 방문했던 노드 등을 갱신한 status를 리턴함.
    visit(v) {
        let newVisited = new Set(this.visited)
        newVisited.add(v)
        let newSheep = this.sheep + (this.info[v] === 0 ? 1 : 0)
        let newWolf = this.wolf + (this.info[v] === 1 ? 1 : 0)
        if (newWolf >= newSheep) newSheep = 0
        return new Status(this.info, this.edges, newVisited, newSheep, newWolf)
    }
}

// 현재 상태 기준으로 새롭게 방문 가능한 노드들의 목록을 뽑고, 이들에 대해 dfs 수행을 하는데
// 오직 양의 수가 늑대의 수보다 많을 경우에 대해서만 dfs를 수행함.
// 그리고 모든 dfs의 리턴은 각 dfs 진입 상태에서 알 수 있는 양의 수 즉,
// 아래의 기준에 따라 dfs를 수행한 모든 상태에 대해, 양의 수를 항상 리턴하여 그중 가장 큰 양의 수 즉 bestValue를 기록하며 리턴함.
function dfs(status) {
    let visitable = status.visitable()
    let bestValue = status.sheep

    visitable.forEach((v) => {
        let nextStatus = status.visit(v)
        let nextVal = 0
        if (nextStatus.sheep > nextStatus.wolf) nextVal = dfs(nextStatus)
        if (bestValue < nextVal) {
            bestValue = nextVal
        }
    })
    return bestValue
}

// 방문 가능한 노드들에 대해 늑대의 수가 양의 수를 넘지 않는 경우에 대해 dfs 수행하여
// 매번 양의 수를 기록하고 그렇게 기록한 '양의 수' 중 가장 큰 수를 최종적으로 뽑아냄.
function solution(info, edges) {
    let edgeConverted = {}

    // adjacent list(tree) 초기화
    edges.forEach((e) => {
        let [v1, v2] = e
        if (!edgeConverted[v1]) edgeConverted[v1] = []
        if (!edgeConverted[v2]) edgeConverted[v2] = []
        edgeConverted[v1].push(v2)
    })

    let initStatus = new Status(
        info,
        edgeConverted,
        new Set([0]),
        info[0] === 0 ? 1 : 0,
        info[0] === 1 ? 1 : 0
    )
    let answer = dfs(initStatus)

    return answer
}
