/**
 * LeetCode: 191 Number of 1 Bits
 *
 * Description:
 *
 * Write a function that takes an unsigned integer and 
 * returns the number of '1' bits it has (also known as 
 * the Hamming weight).
 *
 * Constraints:
 *
 * The input must be a binary string of length 32
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	let f = 0
	for (let i=0; i<n.toString(2).length; i++) {
		if (n.toString(2)[i] == '1') {
			f += 1
		}
	}
	return f
};