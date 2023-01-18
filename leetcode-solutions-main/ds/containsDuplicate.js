var containsDuplicate = function (nums) {
  const has_duplicate = [];
  for (let i = 0; i < nums.length; i++) {
    if (has_duplicate.includes(nums[i])) return true;
    else has_duplicate.push(nums[i]);
  }

  return false;
};
