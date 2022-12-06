// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  cc = cc.split("");
  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = "#";
  }
  cc = cc.join("");
  return cc;
}
