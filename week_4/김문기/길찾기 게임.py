import sys
sys.setrecursionlimit(10**5)

def getSubTree(nodes):
    if not nodes:
        return None
    parent = nodes[0]
    leftNodes = [n for n in nodes[1:] if n[1] < parent[1]]
    rightNodes = [n for n in nodes[1:] if n[1] > parent[1]]
    # print(parent)
    # print(leftNodes)
    # print(rightNodes)
    # print("=============")
    left = getSubTree(leftNodes) if leftNodes else None
    right = getSubTree(rightNodes) if rightNodes else None
    return (left, right, parent[0])

def preorder(tree, res):
    if tree:
        res.append(tree[2])
        preorder(tree[0], res)
        preorder(tree[1], res)

def postorder(tree, res):
    if tree:
        postorder(tree[0], res)
        postorder(tree[1], res)
        res.append(tree[2])

def solution(nodeinfo):
    nodes = [(idx+1, x, y) for idx, (x, y) in enumerate(nodeinfo)]
    nodes.sort(key=lambda x: (-x[2], x[1]))
    # print(nodes)
    tree = getSubTree(nodes)
    # print(tree)
    pre, post = [], []
    preorder(tree, pre)
    postorder(tree, post)
    return [pre, post]
