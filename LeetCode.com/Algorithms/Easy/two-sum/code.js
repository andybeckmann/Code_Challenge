/**
 * LeetCode: 1 Two Sum
 *
 * Description:
 *
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add 
 * up to target.
 *
 * You may assume that each input would have exactly one 
 * solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10^3
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 1 valid target
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let x = null,
		y = null;
	for (let i=0; i<nums.length; i++) {
		x = nums[i];
		for (let e=0; e<nums.length; e++) {
			y = nums[e];
			if ((x + y) == target && i != e) {
				let f = [];
				f.push(i);
				f.push(e);
				return f;
			}
		}
	}
};