def solution(id_list, report, k):

    n=len(id_list)
    result=[0]*n
    manage={}
    for i,name in enumerate(id_list):
        manage[name]={"idx":i,"reporters":set([])}
    
    for s in report:
        user,reported=s.split(" ")
        manage[reported]["reporters"].add(user)
    
    filtered_manage={name:manage[name] for name in manage if len(manage[name]["reporters"])>=k}
    
    for name in filtered_manage:
        for user in filtered_manage[name]["reporters"]:
            i=manage[user]["idx"]
            result[i]+=1
            
    return result
            
        
        
        
        