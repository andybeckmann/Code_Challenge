/**
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