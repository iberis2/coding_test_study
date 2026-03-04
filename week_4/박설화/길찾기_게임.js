function solution(nodeinfo) {
  const node = nodeinfo.map(([x, y], idx) => ({ x, y, index: idx + 1})).sort(({x: x1, y: y1}, {x: x2, y: y2}) => y2 - y1 !== 0 ? y2 - y1 : x1 - x2);
  const root = new Tree(node[0]);
  
  for (let i = 1; i < node.length; i++){
      root.insert(new Tree(node[i]))
  }
  
  const answer = [[], []];
  preorder(root, answer[0]);
  postorder(root, answer[1]);
  
  return answer;
};

class Tree {
  constructor({x = 0, y = 0, index = 0}){
      this.x = x;
      this.y = y;
      this.index = index;
      this.left = null;
      this.right = null;
  }
  
  insert(node){
      if(node.x < this.x){
          if(!this.left){ 
              this.left = node
          } else {
              this.left.insert(node)
          }
      } else {
          if(!this.right){ 
              this.right = node
          } else {
              this.right.insert(node)
          }
      }
  }
};

function preorder(node, arr){
  if(!node) return;

  arr.push(node.index); 
  preorder(node.left, arr); 
  preorder(node.right, arr);
}

function postorder(node, arr){
  if(!node) return;

  postorder(node.left, arr); 
  postorder(node.right, arr); 
  arr.push(node.index);
}