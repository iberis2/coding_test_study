function solution(cards1, cards2, goal) {  
  for(el of goal){
      if(el === cards1[0]){
          cards1.shift();
      }else if(el === cards2[0]){
          cards2.shift();
      }else{
          return "No";
      }           
  }
      return "Yes"
}



