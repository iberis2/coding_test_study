/**
 * 알고리즘: 이중 연결 리스트(Doubly Linked List) + 스택(Stack)
 * 시간복잡도: O(N + M×K) - N은 행의 수, M은 명령 수, K는 이동 거리
 * 공간복잡도: O(N)
 */
class Node {
    constructor(value, prev, next) {
        this.value = value
        // 각 노드마다 연결된 이전 노드와 다음 노드를 들고 있음.
        this.prev = prev
        this.next = next
    }
}

function solution(n, k, cmd) {
    const table = Array.from({length: n}, () => true)
    const nodes = Array.from({length: n}, () => new Node())
    const removed = []
    let cur = nodes[k] // 현재 가리키고 있는 노드

    // 초기화 - 처음에는 순서대로 연결되어 있음.
    for (let i = 0; i < n; i++) {
        nodes[i].value = i
        nodes[i].prev = nodes[i - 1]
        nodes[i].next = nodes[i + 1]
    }

    cmd.forEach((command) => {
        command = command.split(" ")
        switch (command[0]) {
            case "U":
                for (let i = 0; i < command[1]; i++) {
                    cur = cur.prev
                }
                break
            case "D":
                for (let i = 0; i < command[1]; i++) {
                    cur = cur.next
                }
                break
            case "C":
                table[cur.value] = false // 삭제 여부 관리
                removed.push(cur) // 스택에 푸쉬
                if (cur.next === undefined) {
                    // 마지막 노드인 경우
                    cur = cur.prev
                    cur.next = undefined
                } else if (cur.prev === undefined) {
                    // 첫번째 노드인 경우
                    cur.next.prev = undefined
                    cur = cur.next
                } else {
                    // 중간 노드인 경우
                    cur.prev.next = cur.next
                    cur.next.prev = cur.prev
                    cur = cur.next
                }
                break
            case "Z":
                // 삭제한 것 복구
                const restored = removed.pop()
                table[restored.value] = true
                // 앞노드에 restored 연결
                if (restored.prev != undefined) restored.prev.next = restored
                // 뒷노드에 restored 연결
                if (restored.next != undefined) restored.next.prev = restored
                break
        }
    })
    return table.map((v) => (v ? "O" : "X")).join("")
}
