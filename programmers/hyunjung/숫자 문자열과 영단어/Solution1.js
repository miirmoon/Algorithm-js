function solution(s) {
  let answer = "";
  let temp = "";

  const map = new Map();
  map.set("zero", 0);
  map.set("one", 1);
  map.set("two", 2);
  map.set("three", 3);
  map.set("four", 4);
  map.set("five", 5);
  map.set("six", 6);
  map.set("seven", 7);
  map.set("eight", 8);
  map.set("nine", 9);

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      temp += s[i];
      if (map.has(temp)) {
        answer += map.get(temp);
        temp = "";
      }
    } else answer += s[i];
  }

  return parseInt(answer);
}
