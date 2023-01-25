// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

function wordsToMarks(string) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let score = 0;

  for (let i = 0; i < string.length; i++) {
    score += alpha.indexOf(string[i]) + 1;
  }

  return score;
}
