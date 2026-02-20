def check(s):
    q = []
    for item in s:
        if item == '(' or item == '[' or item == '{':
            q.append(item)
        else:
            if len(q) == 0:
                return False
            if item == ')':
                if q.pop() != '(':
                    return False
            elif item == ']':
                if q.pop() != '[':
                    return False
            else:
                if q.pop() != '{':
                    return False
    else:
        if len(q) == 0:
            return True
        else:
            return False
                    
    
def solution(s):
    answer = 0
    n = len(s)
    tmp = s
    for i in range(n):
        if check(tmp):     
            answer += 1
        tmp = tmp[1:] + tmp[0]
    return answer
