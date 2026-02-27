function solution(orders, course) {
  orders = orders.map(order =>[...order].sort().join(''));
  const result = [];

  course.forEach(size => {
      const comboCount = new Map();
      orders.forEach(od => {
          if(od.length >= size){
              const menus = makeCombination(od, size);
              menus.forEach(menu => {
                  comboCount.set(menu, (comboCount.get(menu) ?? 0) + 1);
              })
          }        
      })

      let max = 0;
      for(let v of comboCount.values()){
          max = Math.max(max, v)
      }
      if( max >= 2){
          for (let [k,v] of comboCount){
              if(v === max) result.push(k)
          }
      }
  })
  

  return result.sort();
};

function makeCombination(str, k){
  const menus = [];
  
  function DFS (startIndex, curStr){
      if(curStr.length === k){
          menus.push(curStr);
          return;
      }
      for(let i = startIndex; i < str.length; i++){
          DFS(i + 1, curStr + str[i]);
      }
  }
  
  DFS(0, '')
  return menus
}

