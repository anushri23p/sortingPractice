const countVowelsInChar = function (count, character) {
  const vowel = "aeiouAEIOU";
  let vowelCount = count;

  if (vowel.includes(character)) {
    return vowelCount + 1;
  }

  return vowelCount;
};

const countVowels = function (string) {
  return [...string].reduce(countVowelsInChar, 0);
};

const compareByVowelCount = function (word1, word2) {
  const word1Vowelcount = countVowels(word1);
  const word2Vowelcount = countVowels(word2);

  if (word1Vowelcount > word2Vowelcount) {
    return 1;
  }

  if (word1Vowelcount === word2Vowelcount) {
    return word1 > word2 ? 1 : -1;
  }

  return -1;
};

const sortByVowelCount = function (words) {
  return words.sort(compareByVowelCount);
};

console.log(sortByVowelCount(["anush", "tygh", "uwtyq", "rwuye", "aeiou"]));
//github