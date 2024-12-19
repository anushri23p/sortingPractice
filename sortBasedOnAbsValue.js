const compareByAbsValue = function (a, b) {
  if (Math.abs(a) === Math.abs(b)) {
    return a - b;
  }

  if (Math.abs(a) < Math.abs(b)) {
    return -1;
  }

  return 1;
};

const sortByAbsValue = function (numbers) {
  return numbers.sort(compareByAbsValue);
};
//github