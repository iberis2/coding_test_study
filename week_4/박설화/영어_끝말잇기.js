function solution(n, words) {
  const dic = { [words[0]]: words[0]};
  
  for(let i = 1; i < words.length; i++){
      if(dic[words[i]] || words[i-1].at(-1) !== words[i][0]){
          const person = (i % n) + 1;
          const count = Math.floor(i / n) + 1;

          return [person, count];
      } 
      dic[words[i]] = words[i];
  }

  return [0, 0];
}