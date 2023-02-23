// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

var findDigit = function (num, nth) {
  if (nth <= 0) {
    return -1;
  }
  let change = num.toString().replace("-", "");
  let find = change.charAt(change.length - nth) * 1;
  return find;
};
