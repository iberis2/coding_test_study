from itertools import combinations

def solution(orders, course):
    freq = {}
    
    for order in orders:
        for c in course:
            if len(order) >= c:
                for comb in combinations(sorted(order), c):
                    comb_str = ''.join(comb)
                    if comb_str not in freq:
                        freq[comb_str] = 0
                    freq[comb_str] += 1
    
    answer = []
    for c in sorted(course): 
        candidates = []
        max_count = 0
        
        for comb, count in freq.items():
            if len(comb) == c:
                if count > max_count:
                    max_count = count
                candidates.append((comb, count))
        
        if max_count >= 2:
            for comb, count in candidates:
                if len(comb) == c and count == max_count:
                    answer.append(comb)
    
    return sorted(answer)