// Tribonacci
// [1,1,1], 10], [1,1,1,3,5,9,17,31,57,105]

function tribonacci(signature, n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i < 3 ? signature[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }

  return arr;
}
