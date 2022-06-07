let answerCnt = [0, 0, 0];
let index = [0, 0, 0];
function solution(answers) {
  var answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let max = 0;

  for (let a of answers) {
    match(p1, a, 0);
    match(p2, a, 1);
    match(p3, a, 2);
  }

  for (let a of answerCnt) {
    if (max < a) {
      max = a;
    }
  }

  for (let i in answerCnt) {
    if (answerCnt[i] === max) answer.push(Number(i) + 1);
  }
  return answer;
}

const match = (person, a, order) => {
  if (person[index[order]] === a) {
    answerCnt[order]++;
  }
  if (index[order] === person.length - 1) index[order] = 0;
  else index[order]++;
};
