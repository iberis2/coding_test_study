def solution(cards1, cards2, goal):
    iA, iB = 0, 0
    for word in goal:
        if iA < len(cards1) and cards1[iA] == word:
            iA += 1
            continue
        else:
            if iB < len(cards2) and cards2[iB] == word:
                iB += 1
                continue
                
            else:
                return "No"
    else:
        return "Yes"