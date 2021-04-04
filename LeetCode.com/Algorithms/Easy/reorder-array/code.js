/**
 * LeetCode: 1389 Create Target Array in the Given Order
 *
 * Description:
 *
 * Given two arrays of integers nums and index. Your 
 * task is to create target array under the following rules:
 *
 * - Initially target array is empty.
 * - From left to right read nums[i] and index[i], insert 
 * at index index[i] the value nums[i] in target array.
 * - Repeat the previous step until there are no elements 
 * to read in nums and index.
 * - Return the target array.
 * 
 * It is guaranteed that the insertion operations will be valid.
 *
 * Constraints:
 *
 * 1 <= nums.length, index.length <= 100
 * nums.length == index.length
 * 0 <= nums[i] <= 100
 * 0 <= index[i] <= i
 *
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
	let f = []
	for (let i=0; i<nums.length; i++) {
		if (f[index[i]] != undefined) {
			f.splice(index[i], 0, nums[i])
		} else {
			f.push(nums[i])
		}
	}
	return f
};