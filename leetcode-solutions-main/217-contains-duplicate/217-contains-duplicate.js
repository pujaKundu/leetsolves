/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s = new Set(nums);
    if(s.size !== nums.length)
        return true
    return false;
   
};