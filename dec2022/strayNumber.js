// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}
