// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

function repeats(arr) {
  let uniques = arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
  return uniques.reduce((a, b) => a + b, 0);
}
