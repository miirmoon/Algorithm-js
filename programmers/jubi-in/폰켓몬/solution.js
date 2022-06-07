function solution(nums) {
  var answer = 0;
  var pick = [];

  for (let n of nums) {
    if (!pick.includes(n)) pick.push(n);
    if (pick.length === nums.length / 2) break;
  }
  answer = pick.length;
  return answer;
}
