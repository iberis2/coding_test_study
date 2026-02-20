def solution(board, moves):
    answer = 0
    basket = []
    n = len(board)
    
    for move in moves:
        col = move - 1  
        
        for row in range(n):
            if board[row][col] != 0:
                obj = board[row][col]
                board[row][col] = 0  
                
                if basket and basket[-1] == obj:
                    basket.pop()
                    answer += 2
                else:
                    basket.append(obj)
                break  
    
    return answer
