function solution(N, stages) {
    let stop=Array(N+1).fill(0)
    let pass=Array(N+1).fill(0)
    let rates=[]
    
    // 스탑구하기
    for(let stage of stages){
        if (stage===(N+1)){
            // 마지막 패스 구하기
            pass[N]+=1
        }else{
            stop[stage]+=1
        }
    }
    
    // 패스구하기
    for(let i=N-1;i>0;i--){
        pass[i]=pass[i+1]+stop[i+1]
    }
    
    // 실패율구하기
    for(let i=1;i<=N;i++){
        let rate;
        if(stop[i]+pass[i]===0){
            rate=0
        }else{
            rate= stop[i]/(stop[i]+pass[i])
        }
        rates.push({idx:i,rate:rate})
    }
    
    // 실패율 DESC 인덱스 ASC 정렬
    rates.sort((a,b)=>{
        if(a.rate===b.rate){
            return a.idx-b.idx
        }
        return b.rate-a.rate
    })
    
    // 인덱스만 리턴
    var answer=rates.map((a,i)=>{
        return a.idx
    })
    return answer
}

// 실패율= 스테이지 멈춤/(스테이지 멈춤+스테이지 통과)
