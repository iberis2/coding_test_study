/**
 * 알고리즘: 이진 탐색 트리(BST) 구성 + 전위/후위 순회
 * 시간복잡도: O(N²) 최악 (편향 트리), O(N log N) 평균 (트리 구성) + O(N) (순회)
 * 공간복잡도: O(N)
 */
class Node {
    constructor(coord, left, right) {
        this.coord = coord
        this.left = left
        this.right = right
    }
}
class Tree {
    static root = null
    constructor(root) {
        Tree.root = root
    }
    makeTree(cur, node) {
        // cur 위치에 node가 들어갈 수 있는지 확인.
        // cur node 가 리프 노드인 경우, 왼쪽 or 오른쪽 삽입.
        if (cur.left == null && cur.coord[0] > node.coord[0]) {
            // 왼쪽 삽입
            cur.left = node
            return
        }
        if (cur.right == null && cur.coord[0] < node.coord[0]) {
            // 오른쪽 삽입
            cur.right = node
            return
        }
        if (cur.coord[0] < node.coord[0]) {
            // 오른쪽 부트리 이동
            this.makeTree(cur.right, node)
        } else {
            // 왼쪽 부트리 이동
            this.makeTree(cur.left, node)
        }
    }
}

function solution(nodeinfo) {
    // y 내림차순 정렬
    nodeinfo = nodeinfo.map((v, i) => [...v, i + 1])
    nodeinfo.sort((a, b) => b[1] - a[1])

    let root = new Node(nodeinfo[0], null, null)
    let tree = new Tree(root)

    // 차례로 순회하면서 트리 생성
    for (let i = 1; i < nodeinfo.length; i++) {
        tree.makeTree(Tree.root, new Node(nodeinfo[i], null, null))
    }

    return [makePreorder(Tree.root), makePostorder(Tree.root)]
}

function preorder(cur, result) {
    result.push(cur.coord[2])
    if (cur.left != null) {
        preorder(cur.left, result)
    }
    if (cur.right != null) {
        preorder(cur.right, result)
    }
}

function makePreorder(root) {
    let result = []
    preorder(root, result)
    return result
}

function postorder(cur, result) {
    if (cur.left != null) {
        postorder(cur.left, result)
    }
    if (cur.right != null) {
        postorder(cur.right, result)
    }
    result.push(cur.coord[2])
}

function makePostorder(root) {
    let result = []
    postorder(root, result)
    return result
}
