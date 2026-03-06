/*
enroll	
["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"]

referral
["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"]
*/

function solution(enroll, referral, seller, amount) {
  const 추천인Map = new Map();

  const 수익Map = new Map();

  enroll.forEach((value, idx) => {
    추천인Map.set(value, referral[idx]);
    수익Map.set(value, 0);
  });

  for (let i = 0; i < seller.length; i += 1) {
    let temp = seller[i];
    let money = amount[i] * 100;

    while (temp !== "-" && money > 0) {
      let 줄돈 = Math.floor(money * 0.1);
      let 내가받는돈 = money - 줄돈;

      수익Map.set(temp, 수익Map.get(temp) + 내가받는돈);
      temp = 추천인Map.get(temp);

      money = 줄돈;
    }
  }

  return enroll.map((value) => 수익Map.get(value));
}
