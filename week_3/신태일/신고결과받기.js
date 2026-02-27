function solution(id_list, report, k) {
  const reportObj = {};

  report.forEach((value) => {
    const [신고자, 피신고자] = value.split(" ");

    if (!reportObj[피신고자]) {
      reportObj[피신고자] = new Set();
    }

    reportObj[피신고자].add(신고자);
  });

  let 블랙리스트 = Object.entries(reportObj).filter(
    ([key, value]) => value.size > k || value.size == k,
  );

  let 알리기 = 블랙리스트.map(([_, value]) => [...value]).flat();

  console.log(알리기);

  let answer = {};

  알리기.forEach((value) => {
    answer[value] = answer[value] ? answer[value] + 1 : 1;
  });

  return id_list.map((value) => answer[value] || 0);
}
