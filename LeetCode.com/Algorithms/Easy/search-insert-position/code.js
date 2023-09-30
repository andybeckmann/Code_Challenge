/**
 * Leetcode: 35 Search Insert Position
 * 
 * Description:
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Constraints:
 * 
 * nums contains distinct values sorted in ascending order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	let f = null
	for (let i=0; i<nums.length; i++) {
		if (nums[i] == target) {
			f = i
		}
	}
	if (f == null) {
		if (target > nums[nums.length - 1]) {
			f = nums.length
		} else {
			 for (let e=0; e<nums.length; e++) {
				if (target > nums[e] && nums[e+1] > target) {
					f = e + 1
				}
			}
		}
	}
	return f
};