/**
 * LeetCode: 1460 Make Two Arrays Equal by Reversing Sub-arrays
 * 
 * Description:
 * 
 * Given two integer arrays of equal length target and arr.
 *
 * In one step, you can select any non-empty sub-array of arr and reverse 
 * it. You are allowed to make any number of steps.
 * 
 * Return True if you can make arr equal to target, or False otherwise.
 * 
 * Constraints:
 * 
 * target.length == arr.length
 * 1 <= target.length <= 1000
 * 1 <= target[i] <= 1000
 * 1 <= arr[i] <= 1000
 * 
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
	let f = false,
		n = []
	for (let x=0; x<target.length; x++) {
		for (let y=0; y<arr.length; y++) {
			if (arr[y] == target[x]) {
				n.push(arr[y])
				arr[y] = 0
				y = arr.length
			}
		}
	}
	for (let e=0; e<target.length; e++) {
		if (target[e] == n[e]) {
			f = true
		} else {
			f = false
		}
	}
	return f
};