function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i += 1) {
    let target = phone_book[i];
    let 비교군 = phone_book[i + 1];

    if (비교군.startsWith(target)) {
      return false;
    }
  }

  return true;
}
