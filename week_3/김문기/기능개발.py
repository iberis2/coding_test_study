def solution(progresses, speeds):
    answer = []
    pg = progresses[:]
    
    while pg:
        for i in range(len(pg)):
            pg[i] += speeds[i]
        
        # terminate cond
        if pg[0] >= 100:
            i = 0
            while i < len(pg) and pg[i] >= 100:
                i+= 1
            answer.append(i)
            del pg[:i]
            speeds = speeds[i:]
        
    
    return answer