function solution(nodeinfo) {
  const nodes = nodeinfo
    .map((v, i) => ({
      x: v[0],
      y: v[1],
      id: i + 1,
    }))
    .sort((a, b) => b.y - a.y || a.x - b.x);

  function makeTree(nodeList) {
    if (nodeList.length === 0) return null;

    const targetNode = nodeList[0];

    const leftNodes = nodeList.filter((value) => value.x < targetNode.x);
    const rightNodes = nodeList.filter((value) => value.x > targetNode.x);

    return {
      id: targetNode.id,
      left: makeTree(leftNodes),
      right: makeTree(rightNodes),
    };
  }

  const tree = makeTree(nodes);

  const 전위순회 = [];
  const 후위순회 = [];

  function simulation(node) {
    if (!node) return;

    전위순회.push(node.id);
    simulation(node.left);
    simulation(node.right);
    후위순회.push(node.id);
  }

  simulation(tree);
  return [전위순회, 후위순회];
}
