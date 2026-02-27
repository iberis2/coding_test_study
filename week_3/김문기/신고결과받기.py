def solution(id_list, report, k):
    answer = []
    rep_list = dict()
    
    # 중복 신고 제거
    for i in report:
        rep_list.update({i:0})
    rep = list(rep_list.keys())
    # print(rep)
    
    #신고자 정리
    rep_dict = dict()
    for i in rep:
        a, b = i.split(' ')
        if b in rep_dict:
            tmp = rep_dict[b] + 1
            rep_dict[b] = tmp
        else:
            rep_dict.update({b:1})
    # print(rep_dict)
    
    stop_list = list()
    #정지횟수 확인
    for i in rep_dict:
        if rep_dict[i] >= k:
            stop_list.append(i)
    # print(stop_list)
    
    ans_dict = dict()
    for i in id_list:
        ans_dict.update({i:0})
    # print(ans_dict)
    
    for i in rep:
        a, b = i.split(' ')
        if b in stop_list:
            ans_dict[a] += 1
    
    answer = list(ans_dict.values())
    return answer