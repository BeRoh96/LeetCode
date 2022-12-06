// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
  return new Set(str.toUpperCase()).size === str.length;
}
