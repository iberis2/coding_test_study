from itertools import combinations
from collections import Counter

def solution(orders, course):
    result=[]
    #모든 코스 길이에 대해서
    for c in course:
        tmp=[]
        #모든 주문에 대해서
        for order in orders:
            combos=combinations(sorted(order),c)
            tmp+=combos
        combo_freq_map=Counter(tmp)
        if len(combo_freq_map)>0 and max(combo_freq_map.values())>=2:
            max_freq=max(combo_freq_map.values())
            for combo, freq in combo_freq_map.items():
                if freq==max_freq:
                    result.append("".join(combo))
    return sorted(result)
                

    