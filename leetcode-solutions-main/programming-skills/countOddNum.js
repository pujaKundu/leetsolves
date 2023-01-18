// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
};
