// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
function factorial(n) {
  if (n > 12 || n < 0) {
    throw new Error("something bad happened");
  }

  if (n === 0) {
    return 1;
  }

  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
}
