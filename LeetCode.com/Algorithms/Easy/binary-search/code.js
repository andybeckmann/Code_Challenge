/**
 * Leetcode: 704 Binary Search
 * 
 * Description:
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Constraints:
 * 
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	for (let i=0; i<nums.length; i++) {
		if (nums[i] == target) {
			return i
		}
	}
	return -1
};