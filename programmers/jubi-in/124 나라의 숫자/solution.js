let answer = "";
let arr = [4, 1, 2];

function solution(n) {
  // 3진법이라고 생각
  // 공통된 규칙: 0으로 나누어 떨어지면 몫에서 -1

  solve(n);

  return answer;
}

const solve = (n) => {
  if (n === 0) {
    return;
  }
  answer = arr[n % 3] + answer;
  n % 3 === 0 ? solve(parseInt(n / 3) - 1) : solve(parseInt(n / 3));
};
