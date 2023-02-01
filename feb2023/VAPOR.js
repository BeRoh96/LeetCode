// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

function vaporcode(string) {
  string = string.split(" ").join("");
  let newS = "";

  for (let i = 0; i < string.length; i++) {
    newS += string[i].toUpperCase() + "  ";
  }

  return newS.trim();
}
