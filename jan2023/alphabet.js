// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return

function alphabetPosition(text) {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newS = "";

  for (let i = 0; i < text.length; i++) {
    if (alpha.includes(text.toLowerCase()[i])) {
      newS += alpha.indexOf(text.toLowerCase()[i]) + 1 + " ";
    }
  }

  return newS.trim();
}
