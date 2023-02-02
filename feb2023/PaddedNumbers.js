// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
function solution(value) {
  value = value.toString();
  let missing = 5 - value.length;
  let str = "";

  for (let i = 0; i < missing; i++) {
    str += "0";
  }

  return `Value is ${(str += value)}`;
}
