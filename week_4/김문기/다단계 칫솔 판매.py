def solution(enroll, referral, seller, amount):
    answer = []
    N = len(enroll)
    
    idx = {name: i for i, name in enumerate(enroll)}
    
    upper = [-1] * N
    for i, r in enumerate(referral):
        if r != '-':
            upper[i] = idx[r]
            
    
    profit = [0] * N
    
    for sell, amt in zip(seller, amount):
        cur = idx[sell]
        tmp = amt * 100
        while cur != -1 and tmp > 0:
            commission = tmp // 10
            profit[cur] += tmp - commission
            tmp = commission
            cur = upper[cur]
            
    return profit
    
    return answer