// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
function solution(pairs) {
  let array = [];

  for (let pair in pairs) {
    array.push(pair + " = " + pairs[pair]);
  }

  return array.join(",");
}
