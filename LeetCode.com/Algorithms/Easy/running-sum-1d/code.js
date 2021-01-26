/**
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