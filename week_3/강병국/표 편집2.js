function solution(n, k, cmd) {
    let down=Array.from({length:n},(_,i)=>(i+1))
    let up=Array.from({length:n},(_,i)=>(i-1))
    down[n-1]=-1
    let stack=[]
    let answer=Array(n).fill('O')
    
    for (let command of cmd){
        if (command[0]==="U"){
            let step=Number(command.slice(2))
            k=goUp(k,step);
        }else if (command[0]==="D"){
            let step=Number(command.slice(2))
            k=goDown(k,step);
        }else if (command[0]==="C"){
            k=cut(k)
            
        }else if (command[0]==="Z"){
            undo()
        }
    }
    
    for (let node of stack){
        answer[node]='X'
    }
    return (answer.join(""))
    
    function goDown(k,step){
        for (let i=0;i<step;i++){
            k=down[k]
        }
        return k
    }
    
    function goUp(k,step){
        for (let i=0;i<step;i++){
            k=up[k]
        }
        return k
    }
    
    function cut(k){
        stack.push(k)
        if (up[k]===-1){
            up[down[k]]=-1
            k=down[k]
        }else if(down[k]===-1){
           down[up[k]]=-1
           k=up[k]
        }else{
        down[up[k]]=down[k]
        up[down[k]]=up[k]
        k=down[k]
        }
        return k
    }
    
    function undo(){
        let idx=stack.pop()
        if (down[idx]===-1){
            down[up[idx]]=idx
        }else if(up[idx]===-1){
            up[down[idx]]=idx
        }else{
        down[up[idx]]=idx
        up[down[idx]]=idx
        }
    }
}

