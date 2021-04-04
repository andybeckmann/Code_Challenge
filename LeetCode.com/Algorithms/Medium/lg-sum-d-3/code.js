/**
 * LeetCode: 1262 Greatest Sum Divisible by Three
 *
 * Description:
 *
 * Given an array nums of integers, we need to find the maximum 
 * possible sum of elements of the array such that it is 
 * divisible by three.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 4 * 10^4
 * 1 <= nums[i] <= 10^4
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
	let a = [0, 0, 0],
		v = 0,
		f = 0
	for (let x=0; x<nums.length; x++) {
		v = 0
		for (y of [...a]) {
			v = (nums[x] + y) % 3
			a[v] = Math.max(a[v], nums[x] + y);
		}
	}
	f = a.shift()
	return f
};