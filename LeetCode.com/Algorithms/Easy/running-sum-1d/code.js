/**
 * LeetCode: 1480 Running Sum of 1d Array
 * 
 * Description:
 *
 * Given an array nums. We define a running sum of an array 
 * as runningSum[i] = sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 * 
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	let rs = [],
		t = null
	for (let i=0; i<nums.length; i++) {
		t = t + nums[i]
		rs.push(t)
		if (i > 1000 || nums[i] < -1000000 || nums[i] > 1000000) {
			i = nums.length + 1
		}
	}
	return rs
};