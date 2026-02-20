def solution(N, stages):
    stg = {i+1: [0, 0] for i in range(N)}  

    for cur in stages:
        if 1 <= cur <= N:
            stg[cur][0] += 1

    passed = len(stages)
    for s in range(1, N+1):
        fail = stg[s][0]
        stg[s][1] = passed
        passed -= fail

    def rate(s):
        fail, reached = stg[s]
        return 0 if reached == 0 else fail / reached

    return sorted(range(1, N+1), key=lambda s: (-rate(s), s))
