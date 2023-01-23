// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

function deleteNth(arr, x) {
  let obj = {};

  return arr.filter((number) => {
    obj[number] = obj[number] ? obj[number] + 1 : 1;

    return obj[number] <= x;
  });
}
