// There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
  return Number(arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x)));
}
