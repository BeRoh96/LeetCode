// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
function arithmetic(a, b, operator) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else {
    return a / b;
  }
}
