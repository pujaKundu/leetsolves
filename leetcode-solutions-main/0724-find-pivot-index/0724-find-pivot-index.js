/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    sumTotal = 0
    sumLeft = 0;
    nums.forEach(num=>{
        sumTotal+=num;
    })
    for(let i=0;i<nums.length;i++){
        if(sumLeft === sumTotal - sumLeft - nums[i])
            return i;
        sumLeft+=nums[i]
    }
    return -1
};