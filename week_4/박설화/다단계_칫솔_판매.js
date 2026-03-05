// 풀이 1. 재귀
function solution(enroll, referral, seller, amount) {
  const queue = [];
  const nameToIndex = {};
  
  enroll.forEach((name, idx) => {
      queue.push({name, money: 0, ref: referral[idx] })
      nameToIndex[name] = idx;
  });

  
  for(let i = 0; i < seller.length; i++){
      distributeProfit({money: amount[i] * 100, seller: seller[i]})
  };
  
  function distributeProfit({money, seller}){
      if(seller === '-' || money === 0) return;
      
      const commission = Math.floor(money * 0.1);
      const profit = money - commission;
    
      const sIdx = nameToIndex[seller];
      queue[sIdx].money += profit;
      return distributeProfit({ money: commission, seller: queue[sIdx].ref});
  }
  
  return queue.map(el => el.money);
}

// 풀이 2 while 문
function solution(enroll, referral, seller, amount) {
  const queue = [];
  const nameToIndex = {};
  
  enroll.forEach((name, idx) => {
      queue.push({name, money: 0, ref: referral[idx] })
      nameToIndex[name] = idx;
  });

  
  for(let i = 0; i < seller.length; i++){
      distributeProfit({money: amount[i] * 100, seller: seller[i]});
  };
  
  function distributeProfit({money: _money, seller: _seller}){
      let money = _money, seller = _seller;

      while(seller !== '-' && money > 0){
          const commission = Math.floor(money * 0.1);
          const profit = money - commission;
          
          const sIdx = nameToIndex[seller];
          queue[sIdx].money += profit;

          money = commission;
          seller = queue[sIdx].ref;
      }
      
  }
  
  return queue.map(el => el.money);
}