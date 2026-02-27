/*
orders를 돌면서 각 value별로 course에 해당하는 케이스를 모두 뽑아내기 

각 케이스에 해당하는 값 중 length에 따라 또 줄 세우기
*/

function solution(orders, course) {
  let finalResult = [];

  course.forEach((length) => {
    let orderObj = {};

    orders.forEach((val) => {
      let sortedOrder = [...val].sort();
      let combis = getCombi(sortedOrder, length);
      // console.log(combis)

      combis.forEach((combi) => {
        const menu = combi.join("");
        orderObj[menu] = (orderObj[menu] || 0) + 1;
      });
    });

    const counts = Object.values(orderObj);
    const maxCount = counts.length > 0 ? Math.max(...counts) : 0;

    if (maxCount >= 2) {
      for (const menu in orderObj) {
        if (orderObj[menu] === maxCount) {
          finalResult.push(menu);
        }
      }
    }
  });

  return finalResult.sort();
}

function getCombi(arr, n) {
  if (n == 1) return arr.map((value) => [value]);
  let results = [];
  arr.forEach((currentValue, index, originArr) => {
    const rest = originArr.slice(index + 1);
    const combi = getCombi(rest, n - 1);
    const temp = combi.map((value) => [currentValue, ...value]);

    // console.log(...temp);
    results.push(...temp);
  });
  return results;
}
