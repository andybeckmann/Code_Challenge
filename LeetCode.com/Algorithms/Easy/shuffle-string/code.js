/**
 * LeetCode: 1528 Shuffle String
 * 
 * Given a string s and an integer array indices of the same length.
 *
 * The string s will be shuffled such that the character at the ith 
 * position moves to indices[i] in the shuffled string.
 *
 * Return the shuffled string.
 *
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
	let a = s.split('')
	for (let i=0; i<s.length; i++) {
		a[indices[i]] = s[i]
	}
	a = a.toString().replace(/,/g, '')
	return a;
};