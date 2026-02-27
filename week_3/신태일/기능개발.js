function solution(progresses, speeds) {
  let 남은작업배열 = progresses.map((value) => 100 - value);

  let 소요되는시간배열 = 남은작업배열.map((value, index) =>
    Math.ceil(value / speeds[index]),
  );

  let max소요 = 소요되는시간배열[0];
  let cnt = 1;
  let result = [];

  for (let i = 1; i < 소요되는시간배열.length; i += 1) {
    if (max소요 > 소요되는시간배열[i] || max소요 == 소요되는시간배열[i]) {
      cnt++;
    } else {
      result.push(cnt);
      max소요 = 소요되는시간배열[i];
      cnt = 1;
    }
  }

  result.push(cnt);
  return result;
}
