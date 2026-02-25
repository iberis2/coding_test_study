def solution(n, a, b):
    round = 0
    
    # A와 B가 같아질 때까지 (즉, 서로 매칭될 때까지) 반복
    while a != b:
        # (현재 번호 + 1) // 2 를 통해 올림 처리와 동일한 결과 산출
        a = (a + 1) // 2
        b = (b + 1) // 2
        round += 1
        
    return round


# 최초풀이
# def 
# solution(n,a,b):
#     n_round=0
#     while n>1:
#         n=n//2
#         n_round+=1
        
#     a_sequence=""
#     b_sequence=""
#     a=a-1
#     b=b-1
    
#     for _ in range(n_round):
#         a_sequence=a_sequence+str(a%2)
#         b_sequence=b_sequence+str(b%2)
#         a=a//2
#         b=b//2
#     print(n_round,len(a_sequence))
#     for i in range(n_round-1,-1,-1):
#         if a_sequence[i]!=b_sequence[i]:
#             return i+1
        

#     return answer