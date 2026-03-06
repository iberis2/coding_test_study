def solution(n, words):
    used = set()
    
    fin = ''
    
    for idx, word in enumerate(words):
        if word.startswith(fin) and word not in used:
            used.add(word)
            fin = word[-1]
        else:
            return [(idx%n)+1, (idx//n)+1]
    else:
        return [0,0]