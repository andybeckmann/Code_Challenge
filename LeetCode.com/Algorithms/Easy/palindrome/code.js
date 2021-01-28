/**
 * LeetCode: 9 Palindrome Number
 *
 * Description:
 * 
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward 
 * as forward. For example, 121 is palindrome while 123 is not.
 *
 * Constraints: 
 * 
 * -2^31 <= x <= 2^31 - 1
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	let xs = x.toString(),
		xf = Array.from(xs),
		xb = Array.from(xs).reverse(),
		xl = xb.length - 1,
		m = 0;
	for (let i=0; i<xf.length; i++){
		if (xf[i] == xb[i]) {
			m += 1;
		}
	}
	if (m == xf.length) {
		return true;
	} else {
		return false;
	}
};