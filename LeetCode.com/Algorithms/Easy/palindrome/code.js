/**
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