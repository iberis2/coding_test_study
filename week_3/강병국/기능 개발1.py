def solution(progresses, speeds):
    n=len(speeds)
    done=[False]*n
    start=0
    day=[]
    answer=[]
    for progress in progresses:
        day.append(100-progress)
    for i in range(n):
        if (day[i]%speeds[i])==0:
            day[i]= (day[i]//speeds[i])
        else:
            day[i]= (day[i]//speeds[i])+1
    
    
    for i in range(100):
        for j in range(n):
            if day[j]==i:
                done[j]=True
        if start<n and  done[start]==True:
            count=0
            while start<n and done[start]==True:
                count+=1
                start+=1
            answer.append(count)
            
        
    return answer
