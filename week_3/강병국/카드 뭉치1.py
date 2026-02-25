def solution(cards1, cards2, goal):
    n=len(goal)
    x,y=0,0
    
    for i in range(n):
        if x<len(cards1) and y<len(cards2):
            if goal[i]==cards1[x]:
                x+=1
            elif goal[i]==cards2[y]:
                y+=1
            else:
                return 'No'
                
        elif x<len(cards1):
            if goal[i]==cards1[x]:
                x+=1
            else:
                return 'No'
            
        elif y<len(cards2):
            if goal[i]==cards2[y]:
                y+=1
            else:
                return 'No'
        else:
            return 'No'
    return 'Yes'


