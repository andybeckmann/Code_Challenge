/**
 * LeetCode: 1556 Thousand Separator
 *
 * Description:
 *
 * Given an integer n, add a dot (".") as the thousands 
 * separator and return it in string format.
 *
 * Constraints:
 *
 * 0 <= n < 2^31
 * 
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
	let a = [],
		s = n.toString()
	for (let i=0; i<s.length; i++) {
		a.push(s[s.length - 1 - i])
		if ((i + 1) % 3 == 0 && s[i + 1] != undefined) {
			a.push('.')
		}
	}
	a.reverse()
	let f = a.join('')
	return f
};