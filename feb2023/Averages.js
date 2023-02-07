// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

function averages(numbers) {
  if (!numbers || numbers.length < 2) {
    return [];
  }

  let avg = [];

  for (let i = 0; i < numbers.length; i++) {
    avg.push((numbers[i] + numbers[i + 1]) / 2);
  }

  return avg.slice(0, -1);
}
