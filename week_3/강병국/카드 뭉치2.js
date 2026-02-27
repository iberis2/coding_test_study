function solution(cards1, cards2, goal) {
    // 시간복잡도 O(goal.length)
    
    let [idx1,idx2]=[0,0]
    
    for (let i=0;i<goal.length;i++){
        let word=goal[i]
        if (idx1<cards1.length && cards1[idx1]===word){
            idx1+=1
            continue;
        }
        if (idx2<cards2.length && cards2[idx2]==word){
            idx2+=1
            continue;
        }
        return "No"
    }
    
    return "Yes"
}

