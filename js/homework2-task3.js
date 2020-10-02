function findLongestWord(string = "") {
  const names = string.split(" ");
  let longestWord = names[0];

  for (const name of names) {
    if (name.length > longestWord.length) {
      longestWord = name;
    } // Write code under this line
  }

  return longestWord;
}
