/**
 * LeetCode: 485 Max Consecutive Ones
 *
 * Description:
 *
 * Given a binary array, find the maximum 
 * number of consecutive 1s in this array.
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	let c = 0,
		f = 0
	if (nums[0] == 1 && nums[1] == undefined) {
	   return 1
	} else {
		for (let i=0; i<nums.length; i++) {
			if (nums[i] == 1) {
				c += 1
			} else {
				c = 0
			}
			if (c > f) {
				f = c
			}
		}
	}
	return f
};