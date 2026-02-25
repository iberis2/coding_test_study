def solution(n, k, cmd):
    prev=[i-1 for i in range(n)]
    after=[i+1 for i in range(n)]
    after[n-1]=-1
    stack=[]
    answer=['X']*n
    
    def up(step,k):
        for i in range(step):
            k=prev[k] 
        return k
        
    def down(step,k):
        for i in range(step):
            k=after[k]
        return k
        
    def cut(k):
        stack.append(k)
        if after[k]==-1:
            after[prev[k]]=-1
            return prev[k]
        if prev[k]==-1:
            prev[after[k]]=-1
            return after[k]
        after[prev[k]]=after[k]
        prev[after[k]]=prev[k]
        return after[k]
        
    def undo():
        idx=stack.pop()
        if after[idx]==-1 and prev[idx]==-1:
            after[prev[idx]]=idx
            prev[after[idx]]=idx
        elif after[idx]==-1:
            after[prev[idx]]=idx
        elif prev[idx]==-1:
            prev[after[idx]]=idx
        else:
            after[prev[idx]]=idx
            prev[after[idx]]=idx
        
    for command in cmd:
        if command[0]=="D":
            k=down(int(command[2:]),k)
        if command[0]=="U":
            k=up(int(command[2:]),k)    
        if command[0]=="C":
            k=cut(k)
        if command[0]=="Z":
            undo()
            
    while prev[k]!=-1:
        k=prev[k]
    while after[k]!=-1:
        answer[k]='O'
        k=after[k]
    answer[k]='O'
    
    return "".join(answer)


# 최초풀이
# def solution(n, k, cmd):
#     prev=[i-1 for i in range(n)]
#     after=[i+1 for i in range(n)]
#     after[n-1]=-1
#     stack=[]
#     answer=['X']*n
    
#     def up(step,k):
#         for i in range(step):
#             k=prev[k] 
#         return k
        
#     def down(step,k):
#         for i in range(step):
#             k=after[k]
#         return k
        
#     def cut(k):
#         stack.append(k)
#         if after[k]==-1:
#             after[prev[k]]=-1
#             return prev[k]
#         if prev[k]==-1:
#             prev[after[k]]=-1
#             return after[k]
#         after[prev[k]]=after[k]
#         prev[after[k]]=prev[k]
#         return after[k]
        
#     def undo():
#         idx=stack.pop()
#         if after[idx]==-1 and prev[idx]==-1:
#             after[prev[idx]]=idx
#             prev[after[idx]]=idx
#         elif after[idx]==-1:
#             after[prev[idx]]=idx
#         elif prev[idx]==-1:
#             prev[after[idx]]=idx
#         else:
#             after[prev[idx]]=idx
#             prev[after[idx]]=idx
        
#     for command in cmd:
#         if command[0]=="D":
#             k=down(int(command[2:]),k)
#         if command[0]=="U":
#             k=up(int(command[2:]),k)    
#         if command[0]=="C":
#             k=cut(k)
#         if command[0]=="Z":
#             undo()
            
#     while prev[k]!=-1:
#         k=prev[k]
#     while after[k]!=-1:
#         answer[k]='O'
#         k=after[k]
#     answer[k]='O'
    
#     return "".join(answer)