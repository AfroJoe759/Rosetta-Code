function lascii(cFrom, cTo) {
  let letters = [];

  for (let i = 0; i <= cTo.charCodeAt(0) - cFrom.charCodeAt(0); i++) {
    letters[i] = String.fromCharCode(cFrom.charCodeAt(0) + i);
  }

  return letters;
}
