// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
function sumEvenNumbers(input) {
  let evens = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      evens.push(input[i]);
    }
  }

  return evens.reduce((a, b) => a + b, 0);
}
