/**
 * LeetCode: 1295 Find Numbers with Even Number of Digits
 *
 * Description:
 *
 * Given an array nums of integers, return how many of them 
 * contain an even number of digits.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
	let o = 0,
		s = ''
	for (let i=0; i<nums.length; i++) {
		s = "'" + nums[i] + "'"
		console.log(s)
		if (s.length % 2 == 0) {
			o += 1
		}
	}
	return o;
};