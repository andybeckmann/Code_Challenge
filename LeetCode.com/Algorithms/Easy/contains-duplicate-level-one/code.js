/**
 * Leetcode: 217 Contains Duplicate I
 * 
 * Description:
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let f = false;
	for (let x=0; x<nums.length; x++) {
		for (let y=0; y<nums.length; y++) {
			if (nums[x] == nums[y] && x != y) {
				f = true;
				y = nums.length;
				x = nums.length;
			}
		}
	}
	return f;
};