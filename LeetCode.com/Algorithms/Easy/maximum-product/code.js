/**
 * LeetCode: 1464 Maximum Product of Two Elements in an Array
 *
 * Description:
 *
 * Given the array of integers nums, you will choose two different 
 * indices i and j of that array. Return the maximum value of 
 * (nums[i]-1)*(nums[j]-1).
 *
 * Constraints:
 *
 * 2 <= nums.length <= 500
 * 1 <= nums[i] <= 10^3
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	let f = 0
	for (let i=0; i<nums.length; i++) {
		for (let j=0; j<nums.length; j++) {
			if ((nums[i] - 1) * (nums[j] - 1) > f && i != j) {
				f = (nums[i] - 1) * (nums[j] - 1)
			}
		}
	}
	return f
};