function solution(progresses, speeds) {
    // 시간복잡도 O(t+n) t는 개발 소요시간 최대값, n은 progresses.length
    
    // times[i]는 i번쨰 기능을 개발하는데 걸린 시간
    let times=progresses.map((progress,i)=>{
      return Math.ceil((100-progress)/speeds[i])
    })
    let answer=[]
    
    
    let idx=0
    
    // 개발 소요 시간의 최소값은 1, 최대값은 99
    for (let time=1;time<100;time++){
        if (times[idx]===time){
            let count=0
            while (idx<progresses.length && times[idx]<=time){
                count+=1
                idx+=1
            }
            if (count>0){
            answer.push(count) 
            }
        }
        if(idx===(progresses.length)){
                    return answer
                }
    }
    return answer
}

