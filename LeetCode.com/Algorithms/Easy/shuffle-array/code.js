/**
 * LeetCode: 1470 Shuffle the Array
 *
 * Description:
 *
 * Given the array nums consisting of 2n elements in 
 * the form [x1,x2,...,xn,y1,y2,...,yn]. 
 *
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 *
 * Constraints:
 *
 * 1 <= n <= 500
 * nums.length == 2n
 * 1 <= nums[i] <= 10^3
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
	let f = []
	for (let i=0; i<n; i++) {
		f.push(nums[i])
		f.push(nums[n + i])
	}
	return f
};