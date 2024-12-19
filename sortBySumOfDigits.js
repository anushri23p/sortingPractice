function sumOfDigits(number) {
  number = Math.abs(number);

  if (Math.abs(number) <= 0) {
    return 0;
  }
  return number % 10 + sumOfDigits(((number - number % 10) / 10));
}

const compareByDigitSum = function (num1, num2) {
  return sumOfDigits(num1) - sumOfDigits(num2);
};

const sortBySumOfDigit = function (numbers) {
  return numbers.sort(compareByDigitSum);
};
//github