const isOdd = function (number) {
  return number % 2 !== 0;
};

const isEven = function (number) {
  return number % 2 === 0;
};

const compareByOddEvenPriority = function (firstNumber, secondNumber) {
  if (isOdd(firstNumber) && isEven(secondNumber)) {
    return -1;
  }

  return firstNumber - secondNumber;

};

const sortByOddEven = function (numbers) {
  return numbers.sort(compareByOddEvenPriority);
};

console.log(sortByOddEven([1, 90, 3, 48, 22, 9, 27, 54, 89, 5]));
console.log(sortByOddEven([1, 15, 5, 9, 67, 75]));
console.log(sortByOddEven([31, 10, 1, 2, 3, 4, 5]));
//github