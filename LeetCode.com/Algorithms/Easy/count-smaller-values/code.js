/**
 * LeetCode: 1365 How Many Numbers Are Smaller Than the Current Number
 *
 * Description:
 *
 * Given the array nums, for each nums[i] find out how many numbers in the 
 * array are smaller than it. That is, for each nums[i] you have to count the 
 * number of valid j's such that j != i and nums[j] < nums[i].
 *
 * Return the answer in an array.
 *
 * Constraints:
 *
 * 2 <= nums.length <= 500
 * 2 <= nums.length <= 500
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
	let f = [],
		c = '',
		v = 0
	for (let i=0; i<nums.length; i++) {
		v = 0
		for (let e=0; e<nums.length; e++) {
			if (nums[i] > nums[e]) {
				v += 1
			}
		}
		f.push(v)
	}
	return f
};