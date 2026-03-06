/*
1. 끝말잇기인데 처음 char가 직전 마지막 char랑 다르거나
2. 똑같은 말 또 나오면 return
*/

function solution(n, words) {
  const visited = new Set();

  visited.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const target = words[i];
    const prev = words[i - 1];

    if (prev[prev.length - 1] != target[0] || visited.has(target)) {
      let num = (i % n) + 1;

      let turn = Math.floor(i / n) + 1;

      return [num, turn];
    }

    visited.add(target);
  }
  return [0, 0];
}
