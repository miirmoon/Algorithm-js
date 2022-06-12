function solution(participant, completion) {
  const answer = {};

  for (let p of participant) {
    answer[p] = answer[p] ? answer[p] + 1 : 1;
  }
  for (let c of completion) {
    answer[c] -= 1;
  }

  for (let key in answer) {
    if (answer[key] === 1) {
      return key;
    }
  }
}
