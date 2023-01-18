var maxSubArray = function (nums) {
  let currSum = 0;
  let maxSum = -Infinity;
  for (let num of nums) {
    currSum = Math.max(num, currSum + num);
    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
};
