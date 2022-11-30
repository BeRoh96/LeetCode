// input: [
//   [0, 1, 2, 3, 4],
//   [10, 11, 12, 13, 14],
//   [20, 21, 22, 23, 24],
//   [30, 31, 32, 33, 34],
// ];

// output: "0,1,2,3,4\n" +
//   "10,11,12,13,14\n" +
//   "20,21,22,23,24\n" +
//   "30,31,32,33,34";

function toCsvText(array) {
  return array.join("\n");
}

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
  return Number(
    s
      .split("")
      .filter((a) => a <= "9" && a >= "0")
      .join("")
  );
}
