// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

const orderedCount = function (text) {
  return [...new Set(text)].map((val) => [val, text.split(val).length - 1]);
};
