// Sort an Array of Strings, Ignoring Case Sensitivity

const compareStringsIgnoringCase = function (word1, word2) {
  if (word1.toLowerCase() < word2.toLowerCase()) {
    return -1;
  }

  return 1;
};

const sortByIgnoringCase = function (words) {
  return words.sort(compareStringsIgnoringCase);
};

console.log(sortByIgnoringCase(["anu", "Anu", "gfd", "Weghrf", "jhd"]));
//github