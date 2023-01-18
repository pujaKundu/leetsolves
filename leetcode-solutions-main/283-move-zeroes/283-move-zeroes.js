/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let idx = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[idx] === 0){
            nums.splice(idx,1);
            nums.push(0);
        }
        else{
            idx++;
        }    
    }
    return nums;
};