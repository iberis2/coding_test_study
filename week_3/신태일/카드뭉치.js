/*
goal에서 cards1, cards2에 해당하는 원소들이 갖는 인덱스를 비교하자
*/

function solution(cards1, cards2, goal) {
  let cards1Idx = 0;
  let cards2Idx = 0;

  for (const value of goal) {
    if (cards1Idx < cards1.length && cards1[cards1Idx] == value) {
      cards1Idx++;
    } else if (cards2Idx < cards2.length && cards2[cards2Idx] == value) {
      cards2Idx++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
