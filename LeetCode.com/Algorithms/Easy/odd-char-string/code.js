/**
 * LeetCode: 1374 Generate a String With Characters That Have Odd Counts
 *
 * Description: 
 *
 * Given an integer n, return a string with n characters such that each 
 * character in such string occurs an odd number of times.
 * 
 * The returned string must contain only lowercase English letters. If 
 * there are multiples valid strings, return any of them. 
 *
 * Constraints:
 *
 * 1 <= n <= 500
 *
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
	let f = ''
	if (n % 2 == 0) {
		for (let i=0; i<n-1; i++) {
			f = f + 'a'
		}
		f = f + 'b'
	} else {
		for (let i=0; i<n; i++) {
			f = f + 'a'
		}
	}
	return f
};