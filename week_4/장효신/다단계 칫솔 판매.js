/**
 * 알고리즘: 트리 순회 (재귀) + 해시맵(HashMap)
 * 시간복잡도: O(S × D) - S는 판매 횟수, D는 트리의 깊이
 * 공간복잡도: O(N) - N은 enroll의 길이
 */
let treeMap = new Map()

class Node {
    constructor(name, parent, cost) {
        this.name = name
        this.parent = parent
        this.cost = cost // 현재까지 번 비용
    }
    addCost(cost) {
        this.cost += cost
    }
    getCost() {
        console.log(this.cost)
        return this.cost
    }
}

function shareCost(seller, amount) {
    let myCost = amount * 0.9
    let otherCost = amount * 0.1
    let originalNode = treeMap.get(seller)

    if (otherCost < 1) {
        originalNode.addCost(amount)
        return
    }
    otherCost = Math.floor(otherCost)
    myCost = amount - otherCost

    originalNode.addCost(myCost)
    if (treeMap.get(seller).parent === "-") return
    shareCost(treeMap.get(seller).parent, otherCost)
}

function solution(enroll, referral, seller, amount) {
    var answer = []
    for (let i = 0; i < enroll.length; i++) {
        treeMap.set(enroll[i], new Node(enroll[i], referral[i], 0))
    }
    for (let i = 0; i < seller.length; i++) {
        shareCost(seller[i], amount[i] * 100)
    }
    for (const [key, value] of treeMap) {
        answer.push(value.getCost())
    }
    return answer
}
