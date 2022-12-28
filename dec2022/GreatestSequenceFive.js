// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
function solution(digits) {
  let s = [];
  for (let i = 0; i < digits.length - 4; i++) {
    s.push(digits.substr(i, 5));
  }
  return Math.max(...s);
}
