/**
 * LeetCode: 1748 Sum of Unique Elements
 *
 * Description: 
 *
 * You are given an integer array nums. The unique elements of an 
 * array are the elements that appear exactly once in the array.
 *
 * Return the sum of all the unique elements of nums.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 *
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
	let m = false
		a = [],
		f = 0
	for (let x=0; x<nums.length; x++) {
		m = false
		for (let y=0; y<nums.length; y++) {
			if (x != y) {
				if (nums[x] == nums[y]) {
					m = true
				}
			}
		}
		if (m == false) {
			a.push(nums[x])
		}
	}
	for (let i=0; i<a.length; i++) {
		f += a[i]
	}
	return f
};