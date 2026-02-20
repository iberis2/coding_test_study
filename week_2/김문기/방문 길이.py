def solution(dirs):
    answer = 0
    compare = []
    x, y = 0, 0
    for dir in dirs:
        pos = [x,y]
        if dir == 'U':
            if y == 5:
                continue
            y += 1
        elif dir == 'D':
            if y == -5:
                continue
            y -= 1
        elif dir == 'L':
            if x == -5:
                continue
            x -= 1
        else:
            if x == 5:
                continue
            x += 1
        _new = sorted([pos, [x, y]], key=lambda p: (p[0], p[1]))
        if _new not in compare:
            answer += 1
            compare.append(_new)
    print(compare)
    return answer