function solution(progresses, speeds, stack = []) {
  let top = 0;

  if (progresses[top] < 100) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  } else {
    while (progresses[top] >= 100) {
      top++;
    }
    stack.push(top);
  }

  progresses.splice(0, top);
      speeds.splice(0, top);
  return progresses.length ? solution(progresses, speeds, stack) : stack;
}