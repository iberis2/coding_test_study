def solution(n, a, b):
    answer = 1
    A = a - 1
    B = b - 1
    while A // 2 != B // 2:
        A //= 2
        B //= 2
        answer += 1
    return answer
